var CampoValor = 1;
function AdicionarValor(){
    var search = `valor${CampoValor}`;
    var InputAtual = document.getElementById(search).value;
    console.log(search, InputAtual)
    if(InputAtual > 0){
        CampoValor++;
        document.getElementById('Formulario').insertAdjacentHTML('beforeend', `<div class="FormGroups">
        <label for="Inserir Valor${CampoValor}:"><input type="text" placeholder="Informe o valor${CampoValor}" name="Valor${CampoValor}" id="valor${CampoValor}">
        </div>`)
    }else{
        if(CampoValor == 1){
            document.getElementById('Formulario').insertAdjacentHTML('beforeend', `<div class="FormGroups"><label for="Inserir Valor${CampoValor}:"><button type="submit">Enviar</button></label></div>`)
            document.getElementById("BotaoAdicionar").disabled = true;
        }else{
            document.getElementById(`${search}`).remove()
            document.getElementById('Formulario').insertAdjacentHTML('beforeend', `<div class="FormGroups"><label for="Inserir Valor${CampoValor}:"><button type="submit" id="BotaoEnviar">Enviar</button></label></div>`)
            document.getElementById("BotaoAdicionar").disabled = true;
        }
        
    
         
    
}}
