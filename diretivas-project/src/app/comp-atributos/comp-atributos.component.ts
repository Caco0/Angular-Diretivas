import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  onOffStyle: string = 'disable';
  corFundo: string = 'red';
  paddingSize: string = '10px 10px';
  borderRSize: string = '15px';
  item: string = '';
  listaCompras: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addLista() {
    this.listaCompras.push(this.item);
  }

  //bundle troca o estado do componente neste caso troca o estilo!
  trocar() {
    if (this.onOffStyle == 'disable') {
      this.onOffStyle = 'enable';
    } else {
      this.onOffStyle = 'disable';
    }
  }
}
