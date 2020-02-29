
function tabuada() {
    let tabla = (document.getElementById("entrada").value);
    let max=10;

    for(let i=0; i <= max; i++) {
        let texto = tabla + " x " + i + " = " + (tabla*i);
        document.write("<p>"+texto+"</p>");
        //console.log(texto)
    }
}
