import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz';

/**
 * Los servicios de Angular son singleton (unica instancia) que nos evitan
 * tener que hacer uso de patrones para el manejo de estado, tal como Redux
 * En este caso, los servicios agrupan toda la logica de negocio, para que los componenets
 * la consuman, si es necesario cambiar la info, el componente emite la orden, pero el servicio la ejecuta
 * Por tanto, los servicios, centralizan toda la info.
 * Servicios Angular - equivalente - Manejadores de Estado (Flux)
 * 
 * Otra razon para usar servicios es que nos evitan el tener que hacer levantamiento de estado hacia los compononentes padre (@Output y @EventEmmiter),
 * así como pasar el estado hacia los componentes hijos a través de sus props (@Input) 
 * Lo anterior ocasiona que el componente padre tenga que transmitir info y escuchar eventos de sus hijos,
 * encargandose tambien de la logica de negocio. LO CUAL NO DEBERÍA DE SER ASÍ
 * 
 * 
 * Si el decorador @Injectable no se le pasan argumentos, este servicio deberá ser registrado
 * explicitamente en el módulo que lo necesitemos, a través del key "providers"
 * 
 * El path providedIn: root, idica que no es necesario inyectar de forma explicta este servicio
 * en algun modulo, su acceso será a nivle global
 * 
 * Los servicios para que funcionen tienen que inyectarse dentro del constructor de los componentes, o servicios
 * que lo vayan a consumir
 */

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  // El arreglo es privado, realmente debería ser accesible o modificable a través de metodos de este propio servicio
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15200
    },
    {
      nombre: 'Vegueta',
      poder: 14800
    }
  ];

  // Los servicios pueden inyectar otros servicios
  constructor() { 
    console.log('Servico DBZ inicializado')
  }

  // Retornar un arreglo de personajes
  // En este caso como los objetos y arreglos se pasan por referencia, es importante, pasar una copia
  // Para ello uso el operador spred, tomo los elementos de mi arreglo y los dejo caer en un nuevo arreglo
  getPersonajes(): Personaje[] {
    return [...this._personajes];
  }

  // Registrar un nuevo personaje en el arreglo de personajes
  registrarNuevoPersonaje(personaje: Personaje): void {
    this._personajes.push({...personaje});
  }

}
