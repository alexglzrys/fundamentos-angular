import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // Pasar datos a este componente (desde el componente padre)
  // El argumento pasado a @Input nos permite dar un nombre de propiedad diferente a este componente para pasarle los datos
  // [data]="valores", y esos valores se alamacenan en la propiedad personajes
  // Sin ese argumento, estariamos obligados a pasar esos valores mediante la propiedad [personajes]="valores"
  // @Input('data') personajes: Personaje[] = [];


  // personajes: Personaje[] = []

  // Este componente inyecta el servicio para solicitar el listado de personajes que tiene que mostrar
  // Esto evita el que el estado se pase al componente hijo a través de los props (Input)
  
  // Inyectar la dependencia hacia nuestro servicio (estará presente en la propiedad privada dbzService)
  // Si otro componente inyecta el mismo servicio, al ser Singleton, Angular usa la primer instancia creada.
  // Esto hace que la información que centraliza y gestiona, sea la misma. 
  // Lo anterior es el equivalente a Redux. 
  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
    //this.obtenerPersonajes()
  }

  // Solicitar al servicio, el listado de personajes para poderlos mostrar en la vista de este componente
  /*obtenerPersonajes() {
    this.personajes = this.dbzService.getPersonajes()
  }*/

  // Otra forma de hacer el paso anterior es mediante getters, esto ayuda a ahorrarnos una linea de código
  // Con esto ya no son necesarias las lineas: 
  // personajes: Personaje[] = []
  // y la llamada en el constructor al metodo para recuperar la información
  // al usar get personajes() para acceder a la info en la vista solo se invoca "personajes"
  get personajes(): Personaje[] {
    return this.dbzService.getPersonajes();
  }

}
