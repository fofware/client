import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caja-clientes',
  templateUrl: './caja-clientes.component.html',
  styleUrls: ['./caja-clientes.component.css']
})
export class CajaClientesComponent implements OnInit {
  @Input() cliente: any = [];
  @Input() index: number;
  @Output() onSelectCliente = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.onSelectCliente.emit(this.cliente)
  }
}
