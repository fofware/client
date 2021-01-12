import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { itemComprobante } from '../../models/comprobante'
@Component({
  selector: 'app-compras-items',
  templateUrl: './compras-items.component.html',
  styleUrls: ['./compras-items.component.css']
})
export class ComprasItemsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: itemComprobante;
  @Input() index: number;
  @Output() onDeleteProducto = new EventEmitter<object>();
  @Output() onChangeProducto = new EventEmitter<object>();
  /*
  @Output() changeProd = new EventEmitter<object>();
  */
  constructor() { }

  ngAfterViewInit() {}
  
  ngOnInit(): void {}

  ngOnDestroy(){
    delete this.item;
    delete this.index;
    this.item = null;
    this.index = null;
  }
  calcularSubTot(){
    this.item.calcula();
    this.onChangeProducto.emit({index: this.index})
  }
  delete(){
    this.onDeleteProducto.emit({index: this.index})
  }
}
