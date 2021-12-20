import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

/**
 * Recomendación para trabajar con modulos
 * Crear una carpeta (representa el modulo)
 * Internamente colocar los componentes relacionados (cada uno en su respectiva carpeta)
 * Crear un archivo de modulo, e internamente registrar los componentes que gestiona, y aquellos que exporta,
 * así como importar los modulos que se requieren para que este nuevo modulo pueda trabajar
 */

@NgModule({
    // Listado de componentes que forman parte de este modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Los componentes que serán publicos para otros modulos
    exports: [
        ListadoComponent
    ],
    // Los módulos cuyos componentes serán usados por los elementos de este modulo
    imports: [
        // Necesario para que las directivas de angular funcionen dentro de este modulo
        CommonModule,
    ]
})
export class HeroesModule {

}