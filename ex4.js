function circulo() {
    let r = Number(document.getElementById("num").value);
    const p = 2 * 3.14 * r;
    const a = 3.14 * (r*r);

    /*resposta na msm pagina*/
    document.getElementById("per").innerHTML = p;
    document.getElementById("are").innerHTML = a;

    /*return  {"peri" : p, "Area" : a}*/
    
    /* Resposta so q troca a pagina
    document.write("O perimetro é igual" + p)
    document.write("A area é igua" + a)*/              
}
