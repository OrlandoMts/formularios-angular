import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  // guardar(data: NgForm) {
  //   console.log(data.value);
  // }

  guardar(){
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  productoValido(): boolean {
    // el ? evalua si esxite para continuar
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched ;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.value < 0 && this.miFormulario?.controls['precio']?.touched;

  }

}
