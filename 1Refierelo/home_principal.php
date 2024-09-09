
<?php include("archivos/php/home_head.php");?>
    <link rel="stylesheet" href="archivos/css/style_home_principal.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.js"></script>
</head>
<body class="pagInicio">
    <?php include("archivos/php/home_header.php");?>
    <?php include("archivos/php/home_nav.php");?>
    <main>
        <div class="refRes">
            <h3>Referidos recibidos</h3>
        </div>
        <div class="refGes">
            <h3>Referidos Gestionados</h3>
        </div>
        <div class="desM">
            <h3>Desembolsos millones</h3>
        </div>
        <div>
            <h3>Evolución del negocio</h3>
            <canvas class="gUno" width="820" height="125"></canvas>
        </div>
        <div class="tasaCon">
            <h3>Tasa de conversión</h3>
        </div>
        <div>
            <h3>Tiempo medio de gestión</h3>
            <span class="horasAc"></span>
            <span class="horasAn"></span>
            <svg>
                <circle r="25%" cx="25%" cy="50%" pathlength="100"/>
                <circle class="tiempoMedioAnterior" r="25%" cx="25%" cy="50%" pathlength="100"/>
                <circle r="25%" cx="75%" cy="50%" pathlength="100"/>
                <circle class="tiempoMedioActual" r="25%" cx="75%" cy="50%" pathlength="100"/>
            </svg>
        </div>
        <div class="tiempoMed">
            <h3>Tiempo medio conversión</h3>
        </div>
        <div>
            <h3>Estados de conversión</h3>
            <canvas class="gDos"></canvas>
            <span>Etapas de converción</span>
            <div>
                <span class="contactoInicial"></span>
                <p>Contacto Inicial</p>
                <sup>1</sup>
            </div>
            <div>
                <span class="radicacion"></span>
                <p>Radicación</p>
                <sup>2</sup>
            </div>
            <div>
                <span class="decision"></span>
                <p>Decisión</p>
                <sup>3</sup>
            </div>
            <div>
                <span class="formalizacion"></span>
                <p>Formalización</p>
                <sup>4</sup>
            </div>
            <ul class="listaEstados"></ul>
        </div>
    </main>
    <script src="archivos/js/codigo_home.js"></script>
    <script src="archivos/js/codigo_home_principal.js"></script>
</body>
</html>