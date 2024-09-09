<?php include("archivos/php/head.php");?>
    <link rel="stylesheet" href="archivos/css/style_index.css">
    <title>Refiérelo App</title>
</head>
<body>
    <div class="fondoDifuminado"></div>
    <?php include("archivos/php/header.php");?>
    <main>
        <p>Estos son tus Referidos pendientes de genstón</p>
        <section class="contenedorReferidos">
            <div class="referidos">
                <div class="lista">
                    <span>FECHA HORA</span>
                    <span>NOMBRES Y APELLIDOS</span>
                    <span>TIPO</span>
                    <span>DOCUMENTO</span>
                    <span>PRODUCTO</span>
                    <span>MONTO</span>
                    <span>ESTADO ACTUAL</span>
                </div>
                <div class="boxInfo">
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                    <div class="boxInput">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <button class="asignar">Gestionar</button>
                    </div>
                </div>
            </div>
        </section>
        <p>Estas son tus cifras</p>
        <section class="contenedorIndicadores">
            <div class="indicadores">
                <div class="refRes">
                    <h3>Referidos recibidos</h3>
                </div>
                <div class="refGes">
                    <h3>Referidos Gestionados</h3>
                </div>
                <div class="desM">
                    <h3>Desembolsos millones</h3>
                </div>
                <div class="tmpMedG">
                    <h3>Tiempo medio de gestión</h3>
                    <span class="horasAc"></span>
                    <span class="horasAn"></span>
                    <svg>
                        <circle r="2.5vw" cx="25%" cy="50%" pathlength="100" class="graficaCircualar"/>
                        <circle class="tiempoMedioAnterior graficaCircualar" r="2.5vw" cx="25%" cy="50%" pathlength="100"/>
                        <circle r="2.5vw" cx="75%" cy="50%" pathlength="100" class="graficaCircualar"/>
                        <circle class="tiempoMedioActual graficaCircualar" r="2.5vw" cx="75%" cy="50%" pathlength="100"/>
                    </svg>
                </div>
                <div class="tasaCon">
                    <h3>Tasa de conversión</h3>
                </div>
            </div>
        </section>

    </main>
    <script src="archivos/js/js_index.js"></script>
</body>
</html>