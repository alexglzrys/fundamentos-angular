import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {

  // Pasar datos del hijo al padre
  // Emitir el evento (onAgregar) cuando se registre un nuevo personaje
  // La información a enviar en el evento es el personaje registrado con la ayuda del formulario.
  // Por tanto, esto emitirá un evento cuya información es de tipo Personaje
  // https://desarrolloweb.com/articulos/emision-eventos-output-angular.html
  
  // @Output() onAgregar: EventEmitter<Personaje> = new EventEmitter<Personaje>(); 

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  // Este componente ahora inyecta un servicio para comunicarse con el y pueda registrar el nuevo personaje
  // Esto evita el tener que elevar el estado al padre mediante los eventos.
  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  // Podemos recibir la información del evento disparado
  // agregarPersonaje( event: any ) {
  //   event.preventDefault();
  //   console.log('Hey...')
  // }

  agregarPersonaje( ) {
    if (this.nuevoPersonaje.nombre.trim().length === 0) return;

    // ngSubmit internamente previente el comportamiento por defecto en formularios
    console.log(this.nuevoPersonaje);

    // this.personajes.push(this.nuevoPersonaje); - Se recomienda la segunda opción, ya que los arreglos y objetos se pasan como referencia
    // this.personajes.push({...this.nuevoPersonaje});

    // Emitir el evento personalizado para informar al padre que un nuevo personaje se ha registrado
    // El padre escuchará este evento en el hijo: (onAgregar)="funcionControladora"
    // this.onAgregar.emit(this.nuevoPersonaje);

    // Gracias a que este componente ahora inyecta un servicio, es facil indicarle que registre el nuevo personaje a través de los metodos de ese servicio
    // Esto hace que el servicio de encargue de toda la logia de negocio
    this.dbzService.registrarNuevoPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {nombre: '', poder: 0};
  }

}
