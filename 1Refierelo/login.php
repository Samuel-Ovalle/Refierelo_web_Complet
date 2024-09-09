<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="archivos/css/style_login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
    <title>login</title>
</head>
<body>
    <header>
        <img src="imagenes/logo.png" alt="logo" title="refierelo">
    </header>
    <main>
        <h2>Queremos conocerte un poco más</h2>
        <form class="form" autocomplete="off" action="home_ticket.php">
            <label class="opciones">
                <label for="Persona" class="arrowDown"></label>
                <select id="Persona" class="tipoPersona">
                    <option value="juridica">Persona Jurídica</option>
                    <option value="natural">Persona Natural</option>
                </select>
                <span class="placeholder">Tipo de Aliado</span>
            </label>
            <input type="text" class="one" placeholder="Nombre de la empresa" name="nombreEpresa">
            <input type="number" class="two" placeholder="Nit" name="nit">
            <input type="text" class="three" placeholder="Dirección" name="direccion" hidden>
            <input type="text" class="four" placeholder="Responsable convenio" name="Responsable">
            <input type="text" class="five" placeholder="Cargo actual" name="cargo">
            <input type="number" class="six" placeholder="Celular" name="celular">
            <input type="email" class="seven" placeholder="Mail" name="mail">
            <div class="terminsoCondiciones">
                <input type="checkbox" id="terminos">
                <label class="checkText checkbox checkOne" for="terminos">Aceptamos <b>términos y condiciones</b></label>
                <input type="checkbox" id="tratamiento">
                <label class="checkText checkbox checkTwo" for="tratamiento">Autorizo <b>tratamiento de datos personales</b></label>
            </div>
            <input type="submit" value="Guardar" id="join">
        </form>
    </main>
    <script src="archivos/js/codigo_login.js"></script>
</body>
</html>