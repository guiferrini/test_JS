class Circuito {

    constructor(kmvuelta) {
        this.kmvuelta = kmvuelta;
    }
}

let prova =  new Circuito (500);

//----------------------

class Coche extends Circuito {

    constructor(kmvuelta, velocidad, gasolina) {
        super(kmvuelta);
        this.velocidad = velocidad;
        this.gasolina = gasolina;
    }

    correr() {
        if (this.kmvuelta == 300) {
            console.log("Prova finalizada!");
        } else if (this.gasolina == 0) {
            console.log("vc n tem gasolina")
        } else {
            this.velocidad += 80;
            this.kmvuelta += 50;
            this.gasolina -= 10;
            console.log(this.kmvuelta, this.velocidad, this.gasolina);
        }
    }

    frenar() {
        this.velocidad = 0;
        console.log(this.velocidad)
    }

    recargar() {
        if (this.velocidad == 0) {
            this.gasolina += 40;
        } else {
            console.log("vc tem q parar para recargar!")
        }
    }
}