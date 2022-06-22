import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'Buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild("filtro") inputFiltro:ElementRef
  @Output() filtro = new EventEmitter<string>()

  nuevoFiltro(){
    this.filtro.emit(this.inputFiltro.nativeElement.value)
  }




}
