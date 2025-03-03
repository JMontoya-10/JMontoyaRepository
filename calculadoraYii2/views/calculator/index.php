<?php
use yii\helpers\Html;
use yii\widgets\ActiveForm;
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Yii2</title>
    <!-- Enlazar el archivo CSS -->
    <?= Html::cssFile('@web/css/calculator.css') ?>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEJw6I6B9v4F4mj3v+vWx9l8tXjz5fYyyP4s0Yj9Ezt0R5Z4nZ5R5N5XY5f5" crossorigin="anonymous">
</head>
<body>
    <div class="container calculator-container mt-5">
        <h1 class="text-center mb-4">Calculadora</h1>

        <!-- Formulario con CSRF Token -->
        <form method="post" class="text-center" id="calculator-form">
            <input type="hidden" name="_csrf" value="<?= Yii::$app->request->getCsrfToken(); ?>" />
            
            <!-- Pantalla de la calculadora -->
            <div class="mb-3">
                <input type="text" class="form-control calculator-screen" id="display" name="display" value="<?= $result ?? '' ?>" disabled>
            </div>

            <!-- Botones de la calculadora -->
            <div class="row">
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('7')">7</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('8')">8</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('9')">9</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('/')">/</button></div>
            </div>
            <div class="row">
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('4')">4</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('5')">5</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('6')">6</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('*')">*</button></div>
            </div>
            <div class="row">
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('1')">1</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('2')">2</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('3')">3</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('-')">-</button></div>
            </div>
            <div class="row">
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('0')">0</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('.')">.</button></div>
                <div class="col"><button type="button" class="button" onclick="calculate()">=</button></div>
                <div class="col"><button type="button" class="button" onclick="appendToDisplay('+')">+</button></div>
            </div>
            <div class="row">
                <div class="col-12 text-center mt-3">
                    <!-- Cambié el tipo del botón "Calcular" a type="button" para que no envíe el formulario -->
                    <button type="button" class="btn btn-warning btn-block" onclick="clearDisplay()">Limpiar</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Script de JavaScript para la funcionalidad -->
    <script>
        // Función para agregar valores al display
        function appendToDisplay(value) {
            let display = document.getElementById("display");
            display.value += value;
        }

        // Función para realizar el cálculo 
        function calculate() {
            let display = document.getElementById("display");
            try {
                display.value = eval(display.value); // Realiza la operación
            } catch (error) {
                display.value = "Error"; // En caso de error en la operación
            }
        }

        // Función para limpiar el display
        function clearDisplay() {
            let display = document.getElementById("display");
            display.value = ""; // Limpia el contenido de la pantalla
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
