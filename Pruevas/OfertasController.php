<?php

namespace App\Http\Controllers;

use App\Models\Banco;
use App\Models\Ciudad;
use App\Models\Configuracion;
use App\Models\Subsidios;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class OfertasController extends CatalogosController
{
    // ciudad => id,
    // ingresos => int
    // vivienda => int
    // credito => int
    // plazo => int
    // tipo => int
    // propietario => int
    public function ofertasRangoVivienda(Request $request)
    {
        //$data       =  (object) $request->data;
        $data       =  $request->data;
        $ciudad     = Ciudad::getById($data['ciudad']);
        $config     = Configuracion::getActual();

        $ciudad = $ciudad[0];

        $data_bac = (object) [
            'vivienda'      => $data['vivienda'],
            'tipo_vivienda' => $data['tipo_vivienda'],
            'tipo_persona'  => $data['tipo_persona'],
            'tipo_interes'  => 0, // no leasing
        ];
        $bancos_hip     = Banco::getParametrosRangoVivienda($data_bac);
        $data_bac->tipo_interes = 1; // leasing
        $bancos_lea     = Banco::getParametrosRangoVivienda($data_bac);

        $vis_hasta = $ciudad->vis * $config->salario;
        $vis = $data['vivienda'] <= $vis_hasta ? 1 : 0;
        $cuota_aprox = $data['ingresos'] * ($config->p_vivienda / 100);
        $error = '';
        $max_cuota = 0;
        $supera_cuota = 0;
        $min_credito = $data['credito'];

        $sisben = 0; // si no se seleccion por defecto 0
        if(isset($data['sisben'])) // 0 = no conoce su puntaje, por defecto 1er grupo
            $sisben = $data['sisben'] == 0 ? 1 : $data['sisben'];

        $data_sub = (object) [
            'vivienda' => $data['vivienda'],
            'ingresos' => $data['ingresos'],
            'grupo_sisben' => $sisben,
            'rango_policia' => $data['policia_rango'],
            'min_anios' => $data['policia_anios'],

            'vis' => $vis,
            'tipo_vivienda' => $data['tipo_vivienda'],
            'propietario' => $data['propietario'],
            'tipo_persona' => $data['tipo_persona'] + 1,
        ];

        $subsidio = Subsidios::getSubsidiosValidos($data_sub);

        $ofertas_hip = array();
        foreach ($bancos_hip as $banco)
        {
            $item = new stdClass();
            $item->sub_aplica           = 0;
            $item->sub_cuota_inicial    = 0;
            $item->sub_tasa             = 0;
            $item->sub_cuota            = 0;

            if(isset($subsidio[0]))
            {
                $item->sub_aplica           = 1;
                $item->sub_nombre           = $subsidio[0]->nombre;
                $item->sub_cuota_inicial    = $subsidio[0]->sub_cuotainicial;
                $item->sub_tasa             = $subsidio[0]->sub_tasa;
                $item->sub_cuota            = $subsidio[0]->sub_cuota;
            }

            $item->banco_id         = $banco->id;
            $item->banco            = $banco->banco;
            $item->imagen           = $banco->imagen;
            // TASA NOMINAL => TN = [(1+TE)^(1/n)-1]x n
            // 12 * ( ( ( 1 + TE )^( 1 / 12 ) ) - 1 ) / 12 ===== ORIGINAL
            // ( 12 * ( ( ( 1 + ( t / 100) )^( 1 / 12 ) ) - 1 ) / 12 ) * 100 ===== ADAPTADA TASA A VALORES ENTEROS
            $item->tasa_anual       = $banco->hipotecario_valor_anio - $item->sub_tasa;
            $item->tasa_mensual     = round( ( ( 12 * ( pow( ( 1 + ( $item->tasa_anual / 100) ),( 1 / 12 ) ) -1 ) ) / 12 ) * 100 , 4); //tasa nominal mensual
            $item->financiamiento   = ( $vis && $banco->vis == $config->p_vis ? $config->p_vis : $config->p_nvis );
            $item->gast_avaluo      = $banco->avaluo_tipo == 0 ? $banco->avaluo_valor : $banco->avaluo_valor * $data['vivienda'];
            $item->gast_titulos     = $banco->estudio_tipo == 0 ? $banco->estudio_valor : $banco->estudio_valor * $data['vivienda'];
            $item->vig_aprobacion   = $banco->vigencia;

            if($data['credito'] > ( $data['vivienda'] * ($item->financiamiento / 100) ) )
                $item->monto = $data['vivienda'] * ($item->financiamiento / 100);
            else
                $item->monto = $data['credito'];

            //Cuota = M * i / (1 – 1 / (1 + i)^n)
            //Parte de la formula anterior
            $interes = ( ($item->tasa_mensual / 100) / ( 1 - ( 1 / pow( 1 + ($item->tasa_mensual / 100), $data['plazo'])) ) );
            $item->cuota = round( $item->monto * $interes , 0);

            $item->cuota_inicial    = ($data['vivienda'] - $item->monto ) - $item->sub_cuota_inicial;
            if($item->cuota_inicial < 0) $item->cuota_inicial = 0;

            if($item->cuota > $cuota_aprox)
            {
                //Monto = C / ( i / (1 – 1 / (1 + i)^n) )
                $item->monto = round( $cuota_aprox / $interes , -6) + 1000000;
                $supera_cuota++;
                if($max_cuota < $item->cuota)
                    $max_cuota = $item->cuota;
            }

            while ($item->cuota > $cuota_aprox)
            {
                $item->monto -= 1000000;
                $item->cuota = round( $item->monto * $interes , 0);

                $item->cuota_inicial    = ($data['vivienda'] - $item->monto ) - $item->sub_cuota_inicial;
                if($item->cuota_inicial < 0) $item->cuota_inicial = 0;
            }
            if($min_credito > $item->monto) $min_credito = $item->monto;

            array_push($ofertas_hip, $item);
        }
        
        usort($ofertas_hip, function($elem1, $elem2) {
            if ( $elem1->monto < $elem2->monto ) {
                  return 1;
            } elseif ( $elem1->monto > $elem2->monto ) {
                  return -1;
            } else {
                  return 0;
            }
        });

        $ofertas_lea = array();
        if($vis == 0)
        {
            foreach ($bancos_lea as $banco)
            {
                if(!isset($banco->leasing))
                    continue;
    
                $item = new stdClass();
                $item->sub_aplica           = 0;
                $item->sub_cuota_inicial    = 0;
                $item->sub_tasa             = 0;
                $item->sub_cuota            = 0;
    
                if(isset($subsidio[0]))
                {
                    $item->sub_aplica           = 1;
                    $item->sub_nombre           = $subsidio[0]->nombre;
                    $item->sub_cuota_inicial    = $subsidio[0]->sub_cuotainicial;
                    $item->sub_tasa             = $subsidio[0]->sub_tasa;
                    $item->sub_cuota            = $subsidio[0]->sub_cuota;
                }
    
                $item->banco_id         = $banco->id;
                $item->banco            = $banco->banco;
                $item->imagen           = $banco->imagen;
                // TASA NOMINAL => TN = [(1+TE)^(1/n)-1]x n
                // 12 * ( ( ( 1 + TE )^( 1 / 12 ) ) - 1 ) / 12 ===== ORIGINAL
                // ( 12 * ( ( ( 1 + ( t / 100) )^( 1 / 12 ) ) - 1 ) / 12 ) * 100 ===== ADAPTADA TASA A VALORES ENTEROS
                $item->tasa_anual       = $banco->hipotecario_valor_anio - $item->sub_tasa;
                $item->tasa_mensual     = round( ( ( 12 * ( pow( ( 1 + ( $item->tasa_anual / 100) ),( 1 / 12 ) ) -1 ) ) / 12 ) * 100 , 4); //tasa nominal mensual
                $item->financiamiento   = $banco->leasing;
                $item->gast_avaluo      = $banco->avaluo_tipo == 0 ? $banco->avaluo_valor : $banco->avaluo_valor * $data['vivienda'];
                $item->gast_titulos     = $banco->estudio_tipo == 0 ? $banco->estudio_valor : $banco->estudio_valor * $data['vivienda'];
                $item->vig_aprobacion   = $banco->vigencia;
    
                if($data['credito'] > ( $data['vivienda'] * ($item->financiamiento / 100) ) )
                    $item->monto = $data['vivienda'] * ($item->financiamiento / 100);
                else
                    $item->monto = $data['credito'];
    
                //Cuota = M * i / (1 – 1 / (1 + i)^n)
                //Parte de la formula anterior
                $interes = ( ($item->tasa_mensual / 100) / ( 1 - ( 1 / pow( 1 + ($item->tasa_mensual / 100), $data['plazo'])) ) );
                $item->cuota = round( $item->monto * $interes , 0);
    
                $item->cuota_inicial    = ($data['vivienda'] - $item->monto ) - $item->sub_cuota_inicial;
                if($item->cuota_inicial < 0) $item->cuota_inicial = 0;
    
                if($item->cuota > $cuota_aprox)
                {
                    //Monto = C / ( i / (1 – 1 / (1 + i)^n) )
                    $item->monto = round( $cuota_aprox / $interes , -6) + 1000000;
                    /* if($max_cuota < $item->cuota)
                        $max_cuota = $item->cuota; */
                }
    
                while ($item->cuota > $cuota_aprox)
                {
                    $item->monto -= 1000000;
                    $item->cuota = round( $item->monto * $interes , 0);
    
                    $item->cuota_inicial    = ($data['vivienda'] - $item->monto ) - $item->sub_cuota_inicial;
                    if($item->cuota_inicial < 0) $item->cuota_inicial = 0;
                }
                if($min_credito > $item->monto) $min_credito = $item->monto;
    
                array_push($ofertas_lea, $item);
            }
    
            usort($ofertas_lea, function($elem1, $elem2) {
                if ( $elem1->monto < $elem2->monto ) {
                      return 1;
                } elseif ( $elem1->monto > $elem2->monto ) {
                      return -1;
                } else {
                      return 0;
                }
            });
        }
        
        if($supera_cuota == count($bancos_hip) && count($bancos_hip) > 0)
        {
            $ingresos = $max_cuota / ($config->p_vivienda / 100);
            //$monto = (100 * $min_credito) / 80;
            $error = "Para el valor de tu préstamo, el ingreso familiar minímo requerido debe ser: $" . number_format($ingresos,0,',','.') . '. Con el valor de tu vivienda y tus ingresos familiares esto es lo que te prestaría cada entidad financiera.';
        }

        $mensaje_subsidio = $subsidio[0]->mensaje ?? '';
        if(!isset($subsidio[0]) && $data_sub->tipo_persona == 2)
            $mensaje_subsidio = $config->mensaje_militar_nosubsidio;

        return [
            'ofertas_hipotecario'   => $ofertas_hip,
            'ofertas_leasing'       => $ofertas_lea,
            'error'                 => $error,
            'subsidio_message'      => $mensaje_subsidio,
        ];
    }

    public function ofertasRangoCompraCartera(Request $request)
    {
        $data       = $request->data;
        $data_bac = (object) [
            'vivienda' => $data['saldo'],
            'tipo_producto' => 2,
            'tipo_vivienda' => 0,
            'tipo_persona' => 0,
            'tipo_interes' => 0,
        ];
        $bancos     = Banco::getParametrosRango($data_bac);
        $error = '';

        $ofertas = array();
        foreach ($bancos as $banco)
        {
            $item = new stdClass();

            $item->banco_id         = $banco->id;
            $item->banco            = $banco->banco;
            $item->imagen           = $banco->imagen;
            $item->tasa_anual       = $banco->hipotecario_valor_anio;
            // TASA MENSUAL = (1+T)^(0,0833333333333333)-1
            // ( ( ( 1 + ( T / 100 ) ) ^ 0,0833333333333333 ) - 1 ) * 100
            //  ( 13 / 78 ) / 2 == 0,0833333333333333
            $item->tasa_mensual     = round( ( pow( ( 1 + ( $item->tasa_anual / 100) ), ( 13 / 78 ) / 2 ) -1 ) * 100 , 4);
            $item->gast_avaluo      = $banco->avaluo_tipo == 0 ? $banco->avaluo_valor : $banco->avaluo_valor * $data['saldo'];
            $item->gast_titulos     = $banco->estudio_tipo == 0 ? $banco->estudio_valor : $banco->estudio_valor * $data['saldo'];
            $item->vig_aprobacion   = $banco->vigencia;

            $item->monto = $data['saldo'];
            //Cuota = M * i / (1 – 1 / (1 + i)^n)
            //Parte de la formula anterior
            $interes = ( ($item->tasa_mensual / 100) / ( 1 - ( 1 / pow( 1 + ($item->tasa_mensual / 100), $data['plazo'])) ) );
            $item->cuota = round( $item->monto * $interes , 0);
            $item->cuota_ahorro = $data['cuota'] - $item->cuota;
            if($item->cuota_ahorro < 0)
                $item->cuota_ahorro = 0;

            $item->total_ahorro = $item->cuota_ahorro * $data['plazo'];

            array_push($ofertas, $item);
        }

        usort($ofertas, function($elem1, $elem2) {
            if ( $elem1->cuota > $elem2->cuota ) {
                  return 1;
            } elseif ( $elem1->cuota < $elem2->cuota ) {
                  return -1;
            } else {
                  return 0;
            }
        });

        return [
            'data' => $ofertas,
            'error' => $error,
        ];
    }

    public function ofertasRangoRemodelar(Request $request)
    {
        $data       = $request->data;
        $data_bac = (object) [
            'vivienda' => $data['vivienda'],
            'tipo_producto' => 3,
            'tipo_vivienda' => 0,
            'tipo_persona' => 0,
            'tipo_interes' => 0,
        ];
        $bancos     = Banco::getParametrosRango($data_bac);
        $error = '';

        $ofertas = array();
        foreach ($bancos as $banco)
        {
            if(!isset($banco->remodelacion))
                continue;

            $item = new stdClass();

            $item->banco_id         = $banco->id;
            $item->banco            = $banco->banco;
            $item->imagen           = $banco->imagen;
            $item->tasa_anual       = $banco->hipotecario_valor_anio;
            $item->financiamiento   = $banco->remodelacion;
            // TASA MENSUAL = (1+T)^(0,0833333333333333)-1
            // ( ( ( 1 + ( T / 100 ) ) ^ 0,0833333333333333 ) - 1 ) * 100
            //  ( 13 / 78 ) / 2 == 0,0833333333333333
            $item->tasa_mensual     = round( ( pow( ( 1 + ( $item->tasa_anual / 100) ), ( 13 / 78 ) / 2 ) -1 ) * 100 , 4);
            $item->gast_avaluo      = $banco->avaluo_tipo == 0 ? $banco->avaluo_valor : $banco->avaluo_valor * $data['vivienda'];
            $item->gast_titulos     = $banco->estudio_tipo == 0 ? $banco->estudio_valor : $banco->estudio_valor * $data['vivienda'];
            $item->vig_aprobacion   = $banco->vigencia;

            if( $data['credito'] > $data['vivienda'] * ($banco->remodelacion / 100) )
                $item->monto = $data['vivienda'] * ($banco->remodelacion / 100);
            else
                $item->monto = $data['credito'];
            //Cuota = M * i / (1 – 1 / (1 + i)^n)
            //Parte de la formula anterior
            $interes = ( ($item->tasa_mensual / 100) / ( 1 - ( 1 / pow( 1 + ($item->tasa_mensual / 100), $data['plazo'])) ) );
            $item->cuota = round( $item->monto * $interes , 0);

            array_push($ofertas, $item);
        }

        usort($ofertas, function($elem1, $elem2) {
            if ( $elem1->monto < $elem2->monto ) {
                  return 1;
            } elseif ( $elem1->monto > $elem2->monto ) {
                  return -1;
            } else {
                  return 0;
            }
        });

        return [
            'data' => $ofertas,
            'error' => $error,
        ];
    }
}
