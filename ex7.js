/*Crea una función que transforme un String en mayúscula sin usar las funciones de JavaScript, solo con la Tabla ASCII.

LVL 1: Testear con: JavaScript

LVL 2:  Testear con: Champiñones

LVL 3: Testear con: Hola Mundo!

LVL 4: Testear con: Murciélagos en València

LVL 5: Sin Ninguna Función
 */

 function gerar() {
    let palavra = document.getElementById("txt").value;
    // teste -> document.getElementById("resp").innerText = palavra;
    //for (let c=0; c <= length.palavra; c++) {
    var x = palavra.charCodeAt(0); //gera 1° letra em ordem
    document.getElementById("resp").innerHTML = "The Unicode value is: " + x;
    
    /*gerar uma palavra em codigo e depois o codigo em maiuscula
    String.fromCharCode(65, 66, 67)
    toString...*/
 }