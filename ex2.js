function calcular() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);

    var soma = n1 + n2;

    //document.getElementById("num1").innerText = num1; p escrever o n° na tela
    //document.getElementById("num2").innerText = num2;
    let texto = "A soma entre " + n1 + " e " + n2 + " é igual a " + soma + ".";
    document.getElementById("ola").innerText = texto;
}