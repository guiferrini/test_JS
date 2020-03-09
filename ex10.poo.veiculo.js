/*Crea un Objeto Vehículo el cual aproveches la herencia para crear Coche, Moto, Patin y Bicicleta.

Con Características:

Marca	
Matricula
Nº Ruedas
Nº Puertas
Años
Velocidad
Correr() => velocidad += 10
Frenar() => velocidad = 0
Aparcar() => console.log(Aparcao!!)
 */
class Veiculo {

    constructor(marca, matricula, nruedas, npuertas, anos, velocidad) {
        this.marca = marca;
        this.matricula = matricula;
        this.nruedas = nruedas;
        this.npuertas = npuertas;
        this.anos = anos;
        this.velocidad = velocidad;
    }

    correr() {
        this.velocidad +=10;
        console.log(this.velocidad);
    }

    frenar() {
        this.velocidad = 0;
        console.log(this.velocidad);
    }

    aparcar() {
        if (this.velocidad == 0) {
            console.log('Aparcado!');
        } else {
            console.log('Su velocidad no es zero! No puedes aparcar!');
        }
    }
}

class Coche extends Veiculo {

}

class Moto extends Veiculo {

}

class Patin extends Veiculo {

}

class Bicicleta extends Veiculo {

}