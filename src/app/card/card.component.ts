import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/assets/class/Cliente.model';


@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() idCliente = new EventEmitter<number>()
  @Input() cliente:Cliente;
  @Input() i:number;

  getIdClient(){
    this.idCliente.emit(this.i)
  }



}
