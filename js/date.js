

let diaSemana = new Date().getDay();

switch (diaSemana){
    case 0:
        var dia = "Domingo";
        break;
    case 1:
        var dia = "Segunda-Feira";
        break;
    case 2:
        var dia = "Terça-Feira";
        break;
    case 3:
        var dia = "Quarta-Feira";
        break;
    case 4:
        var dia = "Quinta-Feira";
        break;
    case 5:
        var dia = "Sexta-Feira";
        break;
    case 6:
        var dia = "Sábado";
        break;
    default:
        break;
}

document.getElementById("diaSemana").innerHTML = "Hoje é "+ dia;

let anoAtual = new Date().getFullYear();

for(let ano = anoAtual; ano >= 1900; ano--) {
    document.getElementById("ano").innerHTML += "<option value = '" + ano + "'>" + ano + "</option>";
}

let listaMes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

let quantMeses = listaMes.length; // 12

for (let mes = 0; mes < quantMeses; mes++) {
    document.getElementById("mes").innerHTML += "<option value = '" + listaMes[mes]+ "'>" + listaMes[mes] + "</option>";
}

for(let dia = 1; dia <= 31; dia ++) {
    document.getElementById("dia").innerHTML += "<option value = '" + dia + "'>" + dia + "</option>";
}