function comprar() {
    //ingressos para compra
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let ingresso = tipoIngresso.value;
    let qtdIngresso = document.getElementById("qtd");
    let qtd = parseInt(qtdIngresso.value);

    //ingressos disponiveis 
    let cadeiraPista = document.getElementById("qtd-pista");
    let pista = parseInt(cadeiraPista.textContent);
    let cadeiraSuperior = document.getElementById("qtd-superior");
    let superior =parseInt(cadeiraSuperior.textContent);
    let cadeiraInferior = document.getElementById("qtd-inferior");
    let inferior = parseInt(cadeiraInferior.textContent);

    //limite de compra por pessoa
    if (qtd > 3 ) {
        alert("Só é permitido a compra de 3 ingressos por pessoa.")
    }

    //condições para subtração
    if(ingresso === "pista") {
        if (pista >= qtd) {
            pista -= qtd;
            cadeiraPista.textContent = pista; 
        } else {
            alert("Os ingressos Pista acabaram");
        }
    } else if (ingresso === "superior") {
        if (superior >= qtd) {
            superior -= qtd;
            cadeiraSuperior.textContent = superior;
        } else {
            alert("Os ingressos Superior acabaram");
        }
    } else if (ingresso === "inferior") {
        if(inferior >= qtd) {
            inferior -= qtd;
            cadeiraInferior.textContent = inferior;
        } else {
            alert("Os ingressos Inferior acabaram");
        }
    }   
}


