// Es necesario exportar esta interfaz para usarla desde cualquier lugar.
// No es necesario registrarla en el modulo, pues no tiene un equivalente a JS
// comando: ng g i modulo/carpeta/nombreInterfaz

export interface Personaje {
    nombre: string;
    poder: number;
}
