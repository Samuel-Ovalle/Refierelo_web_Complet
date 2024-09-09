<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="archivos/css/style_index.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <title>Refiérelo App</title>
    </head>
    <body>
        <header>
            <img src="imagenes/logo.png" alt="logo">
        </header>
        <main>
            <section>
                <h1>Bienvenido a Refiérelo</h1>
                <p>Nos encanta que hagas parte de nuestra <b>Comunidad de Aliados</b></p>
                <form method="post" action="home_ticket.php">
                    <input type="tel" placeholder="Número de celular" id="telefono" name="userNumber" required>
                    <input type="password" placeholder="Clave 4 dígitos" id="clave" name="userPassword" required>
                    <input type="submit" value="Ingresar" id="ingresar">
                </form>
                <div class="links">
                    <a href="login.php">Registarme</a>
                    <a href="">Olvide mi clave</a>
                </div>
            </section>
            <section>
                <img src="imagenes/grupo.png" alt="grupo de personas">
            </section>
        </main>
        <footer>
            <span>Lo que nos hace <b>únicos</b></span>
            <div class="flechaIzquierda" hidden></div>
            <div class="flechaDerecha" hidden></div>
            <section>
                <div class="info">
                    <img src="imagenes/ICONOS_ALIADOS1-01.png" alt="icono 1">
                    <span>Nuevos <b>Referidos perfilados</b> cada día</span>
                </div>
                <div class="info">
                    <img src="imagenes/ICONOS_ALIADOS1-02.png" alt="icono 2">
                    <span>Asignación <b>automática</b> de Referidos</span>
                </div>
                <div class="info" hidden>
                    <img src="imagenes/ICONOS_ALIADOS1-03.png" alt="icono 3">
                    <span><b>Notificaciones automáticas</b> para tu fuerza comercia</span>
                </div>
                <div class="info" hidden>
                    <img src="imagenes/ICONOS_ALIADOS1-04.png" alt="icono 4">
                    <span><b>Métricas</b> para tu seguimiento y gestión</span>
                </div>
                <div class="info" hidden>
                    <img src="imagenes/ICONOS_ALIADOS1-05.png" alt="icono 5">
                    <span><b>Sin cobros</b> mensuales pagas por lo que facturas</span>
                </div>
            </section>
        </footer>
        <script src="archivos/js/codigo_index.js"></script>
    </body>
</html>