<?php include("archivos/php/home_head.php");?>
<link rel="stylesheet" href="archivos/css/style_ticket.css">
</head>
<body class="pagTicket">
    <?php include("archivos/php/home_header.php");?>
    <?php include("archivos/php/home_nav.php");?>

    <main>
        <div class="boxInfo">
            <h2>Nombre Empresa</h2>
            <!-- <span>Nit : <?php echo $nombreEpresa; ?></span>
            <span>Dirección : <?php echo $nit; ?></span>
            <span>Telefóno : <?php echo $telefono; ?></span>
            <span>Persona responsable : <?php echo $personaResponsable; ?></span>
            <span>Cargo : <?php echo $cargo; ?></span>
            <span>Celular : <?php echo $celular; ?></span>
            <span>Mail : <?php echo $mail; ?></span>
            <button>Editar</button> -->
        </div>
        <section>
            <h1>CONDICIONES REFERIDOS</h1>
            <div class="infoBox">
                <span>PRODUCTO</span>
                <span>SUBPRODUCTO</span>
                <span>SEGMENTO</span>
                <span>TICKET X REFERIDO</span>
                <span>NOMBRE</span>
                <span>COBERTURA</span>
            </div>
            <form action="">
                <select name="producto" id="">
                    <option value="" disabled selected hidden></option>
                    <option value="credito_hipotecario">Crédito Hipotecario</option>
                    <option value="credito_de_libre_inversion">Crédito de Libre inversión</option>
                    <option value="credito_de_vehiculo">Crédito de vehículo</option>
                    <option value="credito_de_libranza">Crédito de libranza</option>
                    <option value="afiliacion_pensiones_y_cesantias">Afiliación pensiones y cesantías</option>
                    <option value="inversiones_fondos_de_pensiones">Inversiones Fondos de Pensiones</option>
                    <option value="seguros">Seguros</option>
                </select>
                <input type="text" name="subproducto">
                <input type="text" name="segmento">
                <input type="text" name="ticket_x_referido">
                <select name="nombre" id=""></select>
                <select name="cobertura" id=""></select>
                <input type="submit" value="Guardar">
            </form>
            <button class="masColumnas"></button>
        </section>
    </main>
    <script src="archivos/js/codigo_ticket.js"></script>
    <script src="archivos/js/codigo_home.js"></script>
</body>
</html>