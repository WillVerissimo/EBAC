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
eu[5] = "Casado"; // Se adicionar um item à uma casa cujo número seja maior do que o lenght do array, as variáveis de números anteriores receberão o valor "empty"

console.log(eu); // Imprime na tela

eu.pop(); // Remove o último item da array(matriz)

eu.push("Casado"); // Adiciona um elemento à uma array(matriz), em sua última posição

eu.shift(); // Remove o primeiro item de uma array(matriz), se lembrando que a posição dos elementos irá mudar nesse caso

eu.unshift("Bonitão") // Adiciona um item à primeira posição de uma array(matriz)

delete eu[0]; // Deleta um item dentro de um array e deixa seu valor como undefined - Não mostra num innerHTML, sua posição continua sendo utilizada

eu.splice(1,0,"Willian") // Adiciona itens numa posição específica de um array(matriz), sendo o primeiro parâmetro a posição para ser adicionada o elemento, a segunda para quanto itens serão deletados, e a tercera o valor do item

document.getElementById("texto").innerHTML = eu.join(" - ");

const mamae = ["Dilma", "Veríssimo", 57, "Mamãe"];
const gustavo = ["Gustavo"];
const familia = eu.concat(mamae, gustavo);

document.getElementById("texto").innerHTML = familia.join(" - ");

const jogadores1 = ["Biro Biro", "Ribamar", "Pelé", "Maradona"];
const craques1 = jogadores.slice(2); // recorta o conteúdo de um array(matriz), mostrando os valores somente a partir do número do length desejado.

const jogadores2 = [
    "Biro Biro",
    "Ribamar",
    "Pele",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Willian"
];

const craques2 = jogadores2.slice(2,6) // Neste caso, se põe onde se quer iniciar e onde termina - a última casa não é mostrada.

const jogadoresOrdemAlfabetica = jogadores2.sort(); // Sort é utilizado para organizar em ordem alfabética os itens de uma array numa nova variável ou em um print na tela.

jogadoresOrdemAlfabetica.reverse(); // Reverse é utilizado para mostrar ou classificar em ordem descrescente.

const numeros = [40, 100, 1, 5 , 25 , 10];
// numeros.sort() não irá funcionar para números, para que funcione se faz da seguinte forma em Javascript:

numeros.sort(function(a, b){return a - b}); // Essa função retorna corretamente os valores em ordem numérica crescente

numeros.sort(function(a, b){return b - a}); // Essa função retorna corretamente os valores em ordem numérica decrescente

function maiorNumero(array){
    return Math.max.apply(null, array);
} // Essa função retorna o maior número em uma array.

function menorNumero(array){
    return Math.min.apply(null, array);
} // Essa função retorna o menor número de uma array.

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
} // Essa função retorna números maiores que 20 dentro de uma array.

let hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

function verificar() {
    let nome = document.getElementById("campoTexto").value;
    let paragrafo = document.getElementById("validacao");

    if (nome == "" || nome == null) {
        paragrafo.innerHTML = "O campo não pode estar vazio";
        paragrafo.style.color = "red";
    }
    else {
        paragrafo.innerHTML = "TUDO CERTO";
        paragrafo.style.color = "green";
    }
}