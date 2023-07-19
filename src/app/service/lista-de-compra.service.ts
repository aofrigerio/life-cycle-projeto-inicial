import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  postListaDeCompra(nomeDoItem: string){

    const id = this.listaDeCompra.length + 1
    const itemLista : Item = {
      id: id,
      nome: nomeDoItem,
      data: Date().toLocaleLowerCase("pt-BR"),
      comprado: false
    };

    this.listaDeCompra.push(itemLista)

    this.atualizarLocalStorage()
  }

  putListaDeCompra(itemAntigo: Item, nomeEditadoDoItem: string){

    const itemEditado : Item = {
        id: itemAntigo.id,
        nome: nomeEditadoDoItem,
        data: itemAntigo.data,
        comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado)
    this.atualizarLocalStorage()
  }

  pathListaDeCompra(itemAntigo: Item, comprado: boolean){
    const itemEditado : Item = {
      id: itemAntigo.id,
      nome: itemAntigo.nome,
      data: itemAntigo.data,
      comprado: comprado
  }

  const id = itemAntigo.id
  this.listaDeCompra.splice(Number(id)-1, 1, itemEditado)
  this.atualizarLocalStorage()
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens',JSON.stringify(this.listaDeCompra))
  }
}
