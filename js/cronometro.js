function comecarContagem() {
    document.getElementById("contagem").innerHTML = 0;
    soma = document.getElementById("contagem").innerHTML;
    document.getElementById("texto").innerHTML = "Início da contagem"; 
    document.getElementById("ativar").disabled = true;   
    tempo = setInterval(function () {
        document.getElementById("contagem").innerHTML = parseInt(soma) + 1;
        soma++
    }, 1000);
/*    tempo = setTimeout(function () {
        document.getElementById("texto").innerHTML = "Fim da contagem";
        }, 5000); // Este código retorna o valor após um período fixo de tempo, definido em milisegundos */
}

function pararContagem() {
    //clearTimeout(tempo);
    document.getElementById("texto").innerHTML = "Fim da contagem";
    clearInterval(tempo);
    document.getElementById("ativar").disabled = false;
}
