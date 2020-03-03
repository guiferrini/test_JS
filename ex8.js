function gerar() {
    let n = document.getElementById("txt").value;
    cont = 0;
    

    
    /*for (let c = 1; c <= n; c++) {
        if (n % c == 0) {
            cont += 1;
            c++
        } else {
            c++
        }
        
    }*/

    /*c = 1;
    while (c <= n) {
        if (n % c == 0) {
            cont += 1;
            c++
        } else {
            c++
        }
    }*/
    if (cont == 2) {
        document.getElementById("resp").innerHTML = "número primo";  
    } else {
        document.getElementById("resp").innerHTML = "número NÃO primo";
    }

    

}
/*    se ele eh / por ele e 1 é primo se ele é divi por + de 3 naõ é primo...   
 */