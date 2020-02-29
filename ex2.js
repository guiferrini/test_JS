var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;

var soma = Number(num1) + Number(num2);

//document.getElementById("num1").innerText = num1; p escrever o n° natela
//document.getElementById("num2").innerText = num2;
let texto = "A soma entre " + num1 + " e " + num2 + " é igual a " + soma + ".";
document.getElementById("ola").innerText = texto;