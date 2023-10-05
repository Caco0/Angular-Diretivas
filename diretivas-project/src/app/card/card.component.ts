import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuTipe: string = '';
  constructor() {
    this.produtos = ['Mouse', 'Teclado', 'Webcan', 'Monitor', 'Gabinete'];
  }

  ngOnInit(): void {}
  // função que adiciona reação através do add() + *ngFor="let p of produtos no html
  add() {
    this.produtos.push('Placa de video');
  }
  //função que rastreia a lista através do remove() + let i = index no html
  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
