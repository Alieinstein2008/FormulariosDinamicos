var CampoValor = 1;
function AdicionarValor() {
    var search = `valor${CampoValor}`;
    var InputAtual = document.getElementById(search).value;
    if (InputAtual > 0) {
        CampoValor++;
        document.getElementById('Formulario').insertAdjacentHTML('beforeend', `<div class="FormGroups">
        <label for="Inserir Valor${CampoValor}:"><input type="number" autocomplete="off" placeholder="Informe o valor${CampoValor}" name="Valor${CampoValor}" id="valor${CampoValor}" step="0.01">
        </div>`)
    } else {
        if (CampoValor == 1) {
            document.getElementById('ButtonsBoard').insertAdjacentHTML('beforeend', `<input type="button" value="Enviar" id="BotaoEnviar"onclick="VerificarCampos()">`)
            document.getElementById("BotaoAdicionar").disabled = true;
        } else {
            document.getElementById(`${search}`).remove()
            document.getElementById('ButtonsBoard').insertAdjacentHTML('beforeend', `<input type="button" value="Enviar" id="BotaoEnviar" onclick="VerificarCampos()">`)
            document.getElementById("BotaoAdicionar").disabled = true;
        }




    }
}
function VerificarCampos() {
    const CampoPrimarioId = "valor1";
    const IdFormulario = "IdForm"
    if (document.getElementById(CampoPrimarioId).value == '') {
        alert("É necessário informar o valor de pelo menos um único campo, por favor preencha-o")
    } else {
        document.getElementById(IdFormulario).submit();
    }


}
