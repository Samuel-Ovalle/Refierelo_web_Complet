    <?php include("archivos/php/home_head.php");?>
    <link rel="stylesheet" href="archivos/css/style_sugerencias.css">
</head>
<body class="pagSugerencias">
<?php include("archivos/php/home_header.php");?>
<?php include("archivos/php/home_nav.php");?>
    <main>
        <div class="content">
            <img src="imagenes/bombillo.png" alt="">
            <p>Estamos muy felices que estes aquí y quieras dejarnos tú <span>sugerencia</span></p>
            <form class="form_sugerencia">
                <label for="nombre">Déjanos tu <span>nombre</span></label>
                <input type="text" class="input" id="nombre">
                <label for="mail">Déjanos tu <span>mail</span></label>
                <input type="mail" class="input" id="mail">
                <label for="motivo">Selecciona el <span>motivo</span></label>
                <label for="motivo" class="arrowDown"></label>
                <select name="" class="input" id="motivo">
                    <option value="" disabled selected hidden></option>
                    <option value="">hola</option>
                    <option value="">mundo</option>
                </select>
                <label for="sugerencia">Déjanos tu <span>sugerencia</span></label>
                <textarea type="text" class="input" id="sugerencia"></textarea>
                <input class="guardar" type="submit" value="Guardar">
            </form>
        </div>

    </main>
    <script src="archivos/js/codigo_sugerencias.js"></script>
    <script src="archivos/js/codigo_home.js"></script>
</body>
</html>