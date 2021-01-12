import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-caja-articulos',
  templateUrl: './caja-articulos.component.html',
  styleUrls: ['./caja-articulos.component.css']
})
export class CajaArticulosComponent implements OnInit {
  @Input() articulo: any = [];
  @Input() index: number;
  @Output() onAddProducto = new EventEmitter<object>();
  @Output() changeProd = new EventEmitter<object>();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(p){
    this.onAddProducto.emit(p)
  }
}
