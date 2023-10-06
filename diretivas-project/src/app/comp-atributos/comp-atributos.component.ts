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
  borderRsize: string = '15px';
  constructor() {}

  ngOnInit(): void {}

  //budle troca o estado do componente neste caso troca o estilo!
  trocar() {
    if (this.onOffStyle == 'disable') {
      this.onOffStyle = 'enable';
    } else {
      this.onOffStyle = 'disable';
    }
  }
}
