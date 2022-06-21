import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Cliente } from 'src/assets/class/Cliente.model';

@Component({
  selector: 'Registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  //enviar la info al componente padre
  @Output() clientEmiter = new EventEmitter<Cliente>()

  @ViewChild('nombreInput') nombreCliente: ElementRef;
  @ViewChild('apellidoInput') apellidoCliente: ElementRef;
  @ViewChild('planInput') planCliente: ElementRef;


  crearCliente() {

    let newCliente = new Cliente(
      this.nombreCliente.nativeElement.value,
      this.apellidoCliente.nativeElement.value,
      this.planCliente.nativeElement.value
    );
    this.clientEmiter.emit(newCliente)
  }
}
