<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;

class CalculatorController extends Controller
{
    public function actionIndex()
    {
        $result = null;
        if (Yii::$app->request->isPost) {
            $num1 = Yii::$app->request->post('num1');
            $num2 = Yii::$app->request->post('num2');
            $operation = Yii::$app->request->post('operation');

            switch ($operation) {
                case 'add':
                    $result = $num1 + $num2;
                    break;
                case 'subtract':
                    $result = $num1 - $num2;
                    break;
                case 'multiply':
                    $result = $num1 * $num2;
                    break;
                case 'divide':
                    $result = $num2 != 0 ? $num1 / $num2 : 'Error: División por cero';
                    break;
            }
        }

        return $this->render('index', ['result' => $result]);
    }
}
?>