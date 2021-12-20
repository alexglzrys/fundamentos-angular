import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    // Propiedades del componente
    titulo        : string = 'Contador App';
    numero        : number = 10;
    baseAcumulador: number = 5;

    // Metodos del componente
    sumar() {
    this.numero += 1;
    }

    restar() {
    this.numero -= 1;
    }

    // Cuando se tipean los parametros que recibe una funcion o metodo, no se esta diciendo que los valroes se deben de castear/transformar
    // Es decir, si paso '123' no significa que por esperar un numero, este se convierta en 123.
    // El tipo de dato es solo eso, que se espera que sea de un determinado tipo
    acumular(numero: number) {
    this.numero += numero;
    }
}