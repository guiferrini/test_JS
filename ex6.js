function gerar() {
    let letras = ["A", "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z', 'Y'];
    var randomItem = letras[Math.floor(Math.random()*letras.length)] + letras[Math.floor(Math.random()*letras.length)] + (Math.random().toString(10).substr(2, 4));

    document.getElementById("resp").innerHTML = randomItem;
}

function personal() {
    let nombre = document.getElementById("txt").value;
    let comprimento = nombre.length

    /*If length menor q 5, gera outro codigo*/

    let a = nombre[0]; /* gera uma letra, 1° letra */
    let b = nombre[1]; /* gera uma letra, 2° letra*/
    
    let letraas = ["A", "B", "C", "D", "E"];
    let letras2 = ["F", "G", "H", "I", "J"];
    let letras3 = ['K', 'L', 'M', 'N', 'O'];
    let letras4 = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z', 'Y', 'W'];

         
     /* gera um n°, 3° letra */
    if (letraas.indexOf(nombre[2]) != -1) {
        let c = 1;
        let final = a + b + c
        document.getElementById("resp2").innerHTML = final;
    } else if (letras2.indexOf(nombre[2]) != -1) {
        let c = 2;
        let final = a + b + c
        document.getElementById("resp2").innerHTML = final;
    } else if (letras3.indexOf(nombre[2]) != -1) {
        let c = 3;
        let final = a + b + c
        document.getElementById("resp2").innerHTML = final;
    } else if (letras4.indexOf(nombre[2]) != -1) {
        let c = 4;
        let final = a + b + c
        document.getElementById("resp2").innerHTML = final;
    } else {
        ddocument.getElementById("resp2").innerHTML = "erro";
    }  

}
/*Fazer bloco if p + gerar + 2 n°s. tentar com for ou outro looping. 
let resultado = nombre[0] + aleatorio1
console.log(resultado)*/