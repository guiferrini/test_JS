var aleatorio = Math.floor(Math.random() * 11); 
document.write(aleatorio)
var contador = 0;
function acerto() {
    event.preventDefault(); //n recarrega  a pagina
    var nume = document.getElementById("num").value;
        if (nume == aleatorio) {
            contador++;
            document.write("Acertou :), pensei no n°: " + aleatorio);
            document.write(" Vc tentou: " + contador + "    vezes.");
        } else {
            contador++;
            alert("erro " + contador + " tente novamente");
        }
}