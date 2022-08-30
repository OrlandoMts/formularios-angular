import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
};

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('formDinamico') formDinamico!: NgForm;
  juegoNuevo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  persona: Persona = {
    nombre: 'orlando',
    favoritos: [
      {id: 11, nombre:'animal crossing'},
      {id:2, nombre:'forza'}
    ]
  }

  guardar(){
    console.log('xd');
    this.formDinamico.resetForm();
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index,1)
  }

  guardarFavorito() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.juegoNuevo
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.juegoNuevo = "";
  }

}
