    <?php include("archivos/php/home_head.php");?>
    <link rel="stylesheet" href="archivos/css/style_registro_control.css">
</head>
<body class="pagAsesores">
    <?php include("archivos/php/home_header.php");?>
    <?php include("archivos/php/home_nav.php");?>
    <main>
        <h1>Registra tu fuerza comercial</h1>
        <form action="" class="regBox">
            <div class="infoBox">
                <input type="text" placeholder="Nombres">
                <input type="text" placeholder="Apellidos">
                <input type="text" placeholder="Número de celular">
                <input type="text" placeholder="Mail">
                <input type="text" placeholder="Producto a gestionar">
            </div>
            <div class="sexBox">
                <input type="checkbox" name="" id="Hombre">
                <input type="checkbox" name="" id="Mujer">
                <input type="checkbox" name="" id="Binario">
                <label class="sexCheck" for="Hombre">Hombre</label>
                <label class="sexCheck" for="Mujer">Mujer</label>
                <label class="sexCheck" for="Binario">Binario</label>
            </div>
            <input type="checkbox" name="" id="autorizacion"> 
            <label for="autorizacion" class="autorizacion">Estoy autorizado por mi asesor para registrar su información personal</label>
            <input type="submit" value="Guardar">
        </form>
        <section>
            <div class="lista">
                <span>NOMBRES</span>
                <span>APELLIDOS</span>
                <span>NÚMERO DE CELULAR</span>
                <span>MAIL</span>
                <span>PRODUCTO A GESTIONAR</span>
                <span>SEXO</span>
            </div>
            <div class="boxInfo">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <button class="activo">Activo</button>
            </div>
            <div class="boxInfo">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <button class="activar">Activar</button>
            </div>
        </section>
    </main>
    <script src="archivos/js/codigo_registro_control.js"></script>
    <script src="archivos/js/codigo_home.js"></script>
</body>
</html>