function gerar() {
    let n = document.getElementById("txt").value;
    cont = 0;
    
    /*minha formula tem q funcionar p tds os n°, não so p o digitado*/
    contador = 0;
    for (let numero = n; numero >= 0; numero--) {

    /*while (contador <= n) {*/
        for (let c = 1; c <= n; c++) {
            if (n % c == 0) {
                cont += 1;
        } 
        if (cont == 2) {
            var primes = []
            primes.push(n)
        }
        numero--
        /*contador++*/
        
    } 
            
    document.getElementById("resp").innerHTML = "número primo: " + primes;  
    document.getElementById("resp2").innerHTML = "número NÃO primo: " + noPrimes;
    } 

    /*c = 1;
    while (c <= n) {
        if (n % c == 0) {
            cont += 1;
            c++
        } else {
            c++
        }
    }*/
    

}
/*    se ele eh / por ele e 1 é primo se ele é divi por + de 3 naõ é primo..*/