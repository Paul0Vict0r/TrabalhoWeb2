function ligarEnergia(comodoId) {
    let comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "green";
    comodo.style.color = "black";
}

function desligarEnergia(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "red";
    comodo.style.color = "withe";
}

document.getElementById("btn-sala-on").addEventListener("click", function () {
    ligarEnergia("sala");
});

document.getElementById("btn-sala-off").addEventListener("click", function () {
    desligarEnergia("sala");
});

document.getElementById("btn-cozinha-on").addEventListener("click", function () {
    ligarEnergia("cozinha");
});

document.getElementById("btn-cozinha-off").addEventListener("click", function () {
    desligarEnergia("cozinha");
});

document.getElementById("btn-quarto2-on").addEventListener("click", function () {
    ligarEnergia("quarto2");
});

document.getElementById("btn-quarto2-off").addEventListener("click", function () {
    desligarEnergia("quarto2");
});

document.getElementById("btn-quarto-on").addEventListener("click", function () {
    ligarEnergia("quarto");
});

document.getElementById("btn-quarto-off").addEventListener("click", function () {
    desligarEnergia("quarto");
});

document.getElementById("btn-banheiro-on").addEventListener("click", function () {
    ligarEnergia("banheiro");
});

document.getElementById("btn-banheiro-off").addEventListener("click", function () {
    desligarEnergia("banheiro");
});

function ligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "yellow";
    comodo.style.color = "black";
}

    function desligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "white";
}

document.getElementById("btn-sala1-on").addEventListener("click", function () {
    ligarLuz("sala");
});

document.getElementById("btn-sala1-off").addEventListener("click", function () {
    desligarLuz("sala");
});

document.getElementById("btn-cozinha1-on").addEventListener("click", function () {
    ligarEnergia("cozinha");
});

document.getElementById("btn-cozinha1-off").addEventListener("click", function () {
    desligarEnergia("cozinha");
});

document.getElementById("btn-quarto21-on").addEventListener("click", function () {
    ligarEnergia("quarto2");
});

document.getElementById("btn-quarto21-off").addEventListener("click", function () {
    desligarEnergia("quarto2");
});

document.getElementById("btn-quarto1-on").addEventListener("click", function () {
    ligarEnergia("quarto");
});

document.getElementById("btn-quarto1-off").addEventListener("click", function () {
    desligarEnergia("quarto");
});

document.getElementById("btn-banheiro1-on").addEventListener("click", function () {
    ligarEnergia("banheiro");
});

document.getElementById("btn-banheiro1-off").addEventListener("click", function () {
    desligarEnergia("banheiro");
});

function ligaGeral1(comodoId) {

    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "white";
    comodo.style.color = "black";
}

function desligaGeral1(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "black";
    comodo.style.border = "2px solid white";
}

function ligaGeral() {
    ligaGeral1('sala');
    ligaGeral1('cozinha');
    ligaGeral1('quarto');
    ligaGeral1('quarto2');
    ligaGeral1('banheiro');
}

function desligaGeral() {
    desligaGeral1('sala');
    desligaGeral1('cozinha');
    desligaGeral1('quarto');
    desligaGeral1('quarto2');
    desligaGeral1('banheiro');
}
