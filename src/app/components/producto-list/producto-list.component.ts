import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { iProducto } from 'src/app/models/iProducto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  @Input() producto: iProducto;
  @Input() index: number;
  @Output() addProd = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {
  }

  addPrducto(index:number, producto: iProducto) {
    this.addProd.emit( {index,producto} );
  }
}
