import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Batman', 'Hironman', 'Goku', 'Thor'];
  heroeBorrado: string = '';

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe() {
    // shift() puede devolver un string o undefined cuando no hay elementos en el arreglo
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
