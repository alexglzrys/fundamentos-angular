import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajeComponent
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    // Modulo para trabajar con formularios estilo two way data binding
    FormsModule,
  ]
})
export class DbzModule { }
