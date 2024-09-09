<?php include("archivos/php/home_head.php");?>
<link rel="stylesheet" href="archivos/css/style_asignacion.css">
</head>
<body class="pagRecibidos">
    <?php include("archivos/php/home_header.php");?>
    <?php include("archivos/php/home_nav.php");?>
    <main>
        <h1>
            CONTROL REFERIDOS
        </h1>
        <div>
            <input type="text" name="buscador" id="buscador" class="buscador" placeholder="Buscar">
            <span class="lupa"></span>
            <div class="lista">
                <span>FECHA HORA</span>
                <span>NOMBRES Y APELLIDOS</span>
                <span>TIPO</span>
                <span>DOCUMENTO</span>
                <span>PRODUCTO</span>
                <span>MONTO</span>
                <span>ESTADO ACTUAL</span>
                <span>ASESOR ASIGNADO</span>
            </div>
            <div class="boxInfo">
                <span class="visible"></span>
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <button class="asignar">Asignar</button>
            </div>
            <div class="boxInfo">
                <span class="visible"></span>
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <button class="gestion">En gestión</button>
            </div>
        </div>
    </main>
    <script src="archivos/js/codigo_home.js"></script>
    <script src="archivos/js/codigo_asignacion.js"></script>
</body>
</html>