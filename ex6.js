function gerar() {
    let letras = ["A", "B", 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z', 'Y'];
    var randomItem = letras[Math.floor(Math.random()*letras.length)] + letras[Math.floor(Math.random()*letras.length)] + (Math.random().toString(10).substr(2, 4));

    document.getElementById("resp").innerHTML = randomItem;
}

function personal() {
    let nombre = (document.getElementById("txt").value).toUpperCase();
    let comprimento = nombre.length

    /*If length menor q 5, gera outro codigo*/
    
    let letraas = ["A", "B", "C", "D", "E"];
    let letras2 = ["F", "G", "H", "I", "J"];
    let letras3 = ['K', 'L', 'M', 'N', 'O'];
    let letras4 = ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Z', 'Y', 'W'];

    if (comprimento < 4) {
        var final = nombre[0] + nombre[1] + (Math.random().toString(10).substr(2, 4));
        document.getElementById("resp2").innerHTML = final;
    } else 
     /* gera um n°, 3° e 4° letras */
    if (letraas.indexOf(nombre[2]) != -1) {
        let c = 1;
        let final = nombre[0] + nombre[1] + c;

        if (letraas.indexOf(nombre[3]) != -1) {
            let d = 5;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras2.indexOf(nombre[3]) != -1) {
            let d = 6;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras3.indexOf(nombre[3]) != -1) {
            let d = 7;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras4.indexOf(nombre[3]) != -1) {
            let d = 8;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else {
            ddocument.getElementById("resp2").innerHTML = "erro";
        }  

    } else if (letras2.indexOf(nombre[2]) != -1) {
        let c = 2;
        let final = nombre[0] + nombre[1] + c

        if (letraas.indexOf(nombre[3]) != -1) {
            let d = 5;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras2.indexOf(nombre[3]) != -1) {
            let d = 6;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras3.indexOf(nombre[3]) != -1) {
            let d = 7;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras4.indexOf(nombre[3]) != -1) {
            let d = 8;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else {
            ddocument.getElementById("resp2").innerHTML = "erro";
        }  
    } else if (letras3.indexOf(nombre[2]) != -1) {
        let c = 3;
        let final = nombre[0] + nombre[1] + c

        if (letraas.indexOf(nombre[3]) != -1) {
            let d = 5;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras2.indexOf(nombre[3]) != -1) {
            let d = 6;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras3.indexOf(nombre[3]) != -1) {
            let d = 7;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras4.indexOf(nombre[3]) != -1) {
            let d = 8;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else {
            ddocument.getElementById("resp2").innerHTML = "erro";
        }  
    } else if (letras4.indexOf(nombre[2]) != -1) {
        let c = 4;
        let final = nombre[0] + nombre[1] + c
        
        if (letraas.indexOf(nombre[3]) != -1) {
            let d = 5;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras2.indexOf(nombre[3]) != -1) {
            let d = 6;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras3.indexOf(nombre[3]) != -1) {
            let d = 7;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else if (letras4.indexOf(nombre[3]) != -1) {
            let d = 8;
            let final = nombre[0] + nombre[1] + c + d + (Math.random().toString(10).substr(2, 2));
            document.getElementById("resp2").innerHTML = final;
        } else {
            ddocument.getElementById("resp2").innerHTML = "erro";
        }  
    } else {
        ddocument.getElementById("resp2").innerHTML = "erro";
    }  

}
/*Fazer bloco if p + gerar + 2 n°s. tentar com for ou outro looping. 
let resultado = nombre[0] + aleatorio1
console.log(resultado)
-gerar um n° com data e outro com randow
somar dentro de final -> final =+ variavel*/
