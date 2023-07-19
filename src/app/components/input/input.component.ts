import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQuevaiSerEditado! : Item;
  editando = false
  textoBtn = 'Salvar Item'

  valorItem! : string

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
      this.service.postListaDeCompra(this.valorItem)
  }

  editarItem(){
    this.service.putListaDeCompra(this.itemQuevaiSerEditado, this.valorItem)
    this.valorItem = ''
    this.editando = false
    this.textoBtn = 'Salvar item'
  }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQuevaiSerEditado'].firstChange){
      this.editando = true
      this.textoBtn = 'Editar Item'
      this.valorItem = this.itemQuevaiSerEditado?.nome
    }
  }
}
