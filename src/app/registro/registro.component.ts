import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Cliente } from 'src/assets/class/Cliente.model';

@Component({
  selector: 'Registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  //enviar la info al componente padre
  @Output() clientEmiter = new EventEmitter<Cliente>();

  @ViewChild('nombreInput') nombreCliente: ElementRef;
  @ViewChild('apellidoInput') apellidoCliente: ElementRef;
  @ViewChild('planInput') planCliente: ElementRef;

  crearCliente() {
    let nombreCliente = this.nombreCliente.nativeElement.value;
    let apellidoCliente = this.apellidoCliente.nativeElement.value;
    let planCliente = this.planCliente.nativeElement.value;
    if (
      nombreCliente === ' ' ||
      apellidoCliente === '' ||
      planCliente === ' '
    ) {
      alert('complete todos los campos');
      return;
    }
    let newCliente = new Cliente(nombreCliente, apellidoCliente, planCliente);
    this.clientEmiter.emit(newCliente);
  }

  limpiarCampos(){
    this.nombreCliente.nativeElement.value = null
    this.apellidoCliente.nativeElement.value = null
    this.planCliente.nativeElement.value = "General"
  }
}
