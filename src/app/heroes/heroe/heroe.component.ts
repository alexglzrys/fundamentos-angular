import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;
    
    // Getters, son como propiedades de clase virtuales que al ser invocadas en la vista retornan un valor
    // No son funciones, puesto que se invocan como cualquier otra propiedad de la clase
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} tiene ${this.edad} años`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}