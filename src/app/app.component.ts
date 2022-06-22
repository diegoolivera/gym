import { Component } from '@angular/core';
import { Cliente } from 'src/assets/class/Cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientes:Cliente[] = []
  filtrado:Cliente[] = [...this.clientes];

  agregarCliente(newCliente:Cliente){
    this.clientes.push(newCliente)
    this.filtrado.push(newCliente)
  }

  borrarCliente(id:number){
    this.clientes = this.clientes.filter((c,i) => i !== id)
    this.filtrado = this.filtrado.filter((c,i) => i !== id)
  }

  filtrar(filtro:string){
    this.filtrado= this.clientes.filter(c=> c.plan === filtro)
  }
}
