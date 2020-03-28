import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  idade = null;
  lista = [];
  maisVelho = {nome: null, idade: 0};
  maisNovo = {nome: null, idade: -1};
  adicionar() {
    if (this.nome != null && this.idade != null) {
      const ps = new Pessoa(this.nome, this.idade);
      this.lista.push(ps);
      if (this.idade > this.maisVelho.idade ) {
        this.maisVelho = ps;
      }
      if ( this.idade < this.maisNovo.idade || this.maisNovo.idade === -1) {
        this.maisNovo = ps;
      }
      this.nome = null;
      this.idade = null;
    }
  }
  excluir(key: number) {
    this.lista.splice(key, 1);
  }
}
