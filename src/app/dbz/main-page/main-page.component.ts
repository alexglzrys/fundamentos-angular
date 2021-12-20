import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz';
import { DbzService } from '../services/dbz.service';

/**
 * Depurar aplicaciones con VSCode y GoogleChrome
 * 1. En VSC presionar F5 (indicar que el debug se hara con el navegador Chrome)
 * 2. El paso anterior genera un archivo .vscode/launch.json
 * 3. En el archivo anterior colocar el puerto donde se esta lanzando la aplicación
 * 4. Presionar nuevamente F5, nos preguntará si deseamos abir Chrome nuevamente (le indicamos que si)
 * 5. Si necesitamos hacer un debugger, basta con colocar un break point en nuestro codigo, (click antes del numero de linea)
 * 6. Cuando ejecutemos nuestra app (en la instancia del navegador abierta por VSC), se detendrá si en algun punto pasa por ese breack point
 * 7. Desde VSC tenemos la herramienta para continuar, paso a paso, o todo.
 * 8. En la seccion de Run and Debug, nos mostrara información util sobre los datos actuales y posteriores
 * 9. Si cerramos la instancia del navegador, se termina el debuggin
 */

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // Esta información no le debería de corresponder al componente principal, mas bien,
  // debería estar centralizada en un servico
  /*personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15200
    },
    {
      nombre: 'Vegueta',
      poder: 14800
    }
  ];*/

  
  constructor() { }

  ngOnInit(): void {
  }

  // Agregar el personaje registrado en el componente agregar-personaje
  // Se recomienda desestructurar, ya que los objetos y arreglos se pasan siempre por referencia
  /*agregarPersonaje( event: Personaje ) {
    this.personajes.push({...event});
  }*/



}
