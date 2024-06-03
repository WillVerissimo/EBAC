document.getElementById("texto").innerHTML= "Meu primeiro texto <b>JS</b>! Feito com document.getElementById().innerHTML";
alert("Olá! Isso é um alerta feito em JS");
console.log("Isso é um console.log feito no JS");
let a,b,c,d; a=5; b=3; c="texto"; d=a+b;
function minhafuncao(){
    document.write("Essa é uma função")
}
console.log(d);
let pessoa = "Willian"
let PESSOA = "WILLIAN"
console.log(pessoa);
console.log(PESSOA);
let segundoNome = "Verissimo";
console.log(segundoNome)
function minhaFuncao() {
    alert("Ativou um evento onclick através de Javascript");
}
function fundoAzulClaro(){
    let div = document.getElementById("minhadiv");
    div.style.backgroundColor="lightblue";
}

function fundoAzul(){
    let div = document.getElementById("minhadiv");
    div.style.backgroundColor="blue"
}

function mouseMove(){
//    let p = document.getElementById("mousemove");
//    p.append("Evento mousemove ativado ");
    console.log("Evento mousemove ativado");
}

function viraVermelho(){
    let div = document.getElementById("minhadiv");
    div.style.backgroundColor="red";
}

function viraAmarelo(){
    let div = document.getElementById("minhadiv");
    div.style.backgroundColor="yellow";
}

function focus(){
    alert("Escreva algo :)");
}

function mudou(){
    console.log("Função onchange ativada");
}

//Inserindo um comentário em uma linha
/*
Autor: Willian
Script feito em 28/05/2024
Este é um comentário de várias linhas 
*/
/*
Eventos mais utilizados em JS:
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela
*/

var item0 = "arroz";
var item1 = "feijão";
var item2 = "macarrão";
var item3 = "leite";

let listaDeCompras = ["arroz", "feijão", "macarrão", "leite"];

listaDeCompras[4] = "ovos";
listaDeCompras[0] = "café"; // Altera o item dentro do array(matriz em português) na posição desejada

function lista(){
    console.log(listaDeCompras);
    console.log(listaDeCompras.length)
}

const eu = ["Willian", "Veríssimo", 28, "Estudante"]; // const array
eu.push("Brasileiro"); // Adiciona um novo item à uma array
eu[5] = "Casado"; // Se adicionar um item à uma casa cujo número seja maior do que o leght do array, as variáveis de números anteriores receberão o valor "empty"

console.log(eu);
