function somar() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var operacao = n1 + n2;
    let texto = "A soma entre " + n1 + " e " + n2 + " é igual a " + operacao + ".";
    document.getElementById("ola").innerText = texto;
}

function subtrair() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var operacao = n1 - n2;
    let texto = "A soma entre " + n1 + " e " + n2 + " é igual a " + operacao + ".";
    document.getElementById("ola").innerText = texto;
}

function multiplicar() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var operacao = n1 * n2;
    let texto = "A soma entre " + n1 + " e " + n2 + " é igual a " + operacao + ".";
    document.getElementById("ola").innerText = texto;
}

function dividir() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var operacao = n1 / n2;
    let texto = "A soma entre " + n1 + " e " + n2 + " é igual a " + operacao + ".";
    document.getElementById("ola").innerText = texto;
}
    //document.getElementById("num1").innerText = num1; p escrever o n° na tela
    //document.getElementById("num2").innerText = num2;