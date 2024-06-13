function buscaCep(){

} 

function buscaCep() {
    let info = document.getElementById("inputCep").value;
    if (info.length === 8) {
        const cep = new XMLHttpRequest();
        cep.open('GET', 'https://viacep.com.br/ws/' + info + '/json/');
        cep.send();

        cep.onload = function () {
            document.getElementById("textoCep").innerHTML = this.responseText;

            let obj = JSON.parse(this.responseText);
            let logradouro = obj.logradouro;
            let bairro = obj.bairro;
            let cidade = obj.localidade;
            let estado = obj.uf;

            document.getElementById("textoCep").innerHTML = "Endereço: " + logradouro + "<br>Cidade: " + cidade + "<br>Bairro: " + bairro + "<br>Estado: " + estado;
            document.getElementById("textoCep").style.color = "black";
            }
        } else {
            document.getElementById("textoCep").innerHTML = "Não foi possível localizar o CEP, revise as informações";
            document.getElementById("textoCep").style.color = "red";
        }

    }




