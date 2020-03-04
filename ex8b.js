function gerar() {
    let n = document.getElementById("txt").value;

    let geral = '';
    let np = " ";
    for (let c = n; c > 0; c--) {  /*faz a regressiva até igual 1 */

        cont = 0;
        for (let co = 1; co <= c; co++) {
            if (c % co == 0) {
                cont += 1;
        } 
    } 
    if (cont < 3) {
        geral += c + ' ';
    } else {
        np += c + " ";
    } 
        document.getElementById("resp").innerText = geral;
        document.getElementById("resp2").innerText = np;
    }
}