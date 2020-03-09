class Circuito {

    constructor(kmvuelta) {
        this.kmvuelta = kmvuelta;
    }
}

let prova =  new Circuito (500);

class Coche {

    constructor(kmvuelta, velocidad, gasolina) {
        super (kmvuelta);
        this.velocidad = velocidad;
        this.gasolina = gasolina;
    }
}



class Coche extends Circuito {

    correr() {
        if (this.kmvuelta == 300) {
            console.log("Prova finalizada!");
        } else {
            this.velocidad += 80;
            this.kmvuelta += 50;
            this.gasolina -= 2;
            console.log(this.kmvuelta, this.velocidad, this.gasolina);
        }
    }
}