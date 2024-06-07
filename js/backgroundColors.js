
function mudaCor(){

let cor = document.getElementById("texto").value;
cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            let p = document.getElementById("textoValidacao");
            p.innerHTML = "Não foi possível localizar a cor desejada";
            p.style.color = "red";
    }
}
