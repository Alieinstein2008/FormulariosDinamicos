<?php
$Cabecalho = "<table class='Tabela' border='1'><tr><td>Valor lido<td/><td>Quadrado<td/><td>Cubo<td/></tr>";
$CampoValor = 1;
$Valores = [];
do {
    $url = "Valor" . $CampoValor;
    $Valores[$CampoValor] = $_POST[$url];
    $CampoValor++;
} while (isset($_POST["Valor" . $CampoValor]));

echo "$Cabecalho";
$ContadorLinhas = 1;
foreach ($Valores as $Valor) {
    if ($ContadorLinhas % 21 == 0) {
        echo "$Cabecalho";
        $Quadrado = $Valor ** 2;
        $Cubo = $Valor ** 3;
        echo "
                    <tr>
                    <td>$Valor<td/>
                    <td>$Quadrado<td/>
                    <td>$Cubo<td/>
                    <tr/>";
    }
    $Quadrado = $Valor ** 2;
    $Cubo = $Valor ** 3;
    echo "
                <tr>
                <td>$Valor<td/>
                <td>$Quadrado<td/>
                <td>$Cubo<td/>
                <tr/>";
    $ContadorLinhas++;
}
echo "<table/>"

    ?>
