import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';

@NgModule({
  // Para poder usar un componente, es necesario que este se encuentre registrado en un modulo
  // Si un componente de este modulo, requiere de otro componente externo que se encuentra registrado en otro modulo
  // se debe importar aqui ese modulo donde se encuentra declarado dicho componente
  declarations: [
    AppComponent,
  ],
  // Los modulos que exportan componentes que se usaran dentro de este modulo (Listado component)
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
