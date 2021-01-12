import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proveedor-articulos',
  templateUrl: './proveedor-articulos.component.html',
  styleUrls: ['./proveedor-articulos.component.css']
})
export class ProveedorArticulosComponent implements OnInit {

  @Input() producto: any = [];
  @Input() index: number;
  @Output() deleteProd = new EventEmitter<object>();
  @Output() changeProd = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  change(index,producto){
    this.changeProd.emit({index,producto});
  }

  delete(index,producto){
    this.deleteProd.emit({index,producto});
//    console.log(producto);
  }
}
