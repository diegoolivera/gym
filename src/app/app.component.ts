import { Component } from '@angular/core';
import { Cliente } from 'src/assets/class/Cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientes:Cliente[] = [new Cliente("Diego","Olivera","Premium"),new Cliente("Ana","Lopez","General")]

  agregarCliente(newCliente:Cliente){
    this.clientes.push(newCliente)
  }

  borrarCliente(id:number){
    this.clientes = this.clientes.filter((c,i) => i !== id)
  }
}
