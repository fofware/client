import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { round } from 'src/app/common/utils';
import { itemComprobante } from 'src/app/models/comprobanteItem';

@Component({
  selector: 'app-comprobantes-items',
  templateUrl: './comprobantes-items.component.html',
  styleUrls: ['./comprobantes-items.component.css']
})
export class ComprobantesItemsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: itemComprobante;
  @Input() index: number;
  @Output() onDeleteItemCmp = new EventEmitter<object>();
  @Output() onChangeItemCmp = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(){
    if(this.item.data.producto.pesable){
      setTimeout(()=>{
        const childs = document.getElementsByTagName("app-comprobantes-items");
        const elems = childs[childs.length-1].getElementsByTagName('input');
        elems[0].select();
        elems[0].focus();
      },100)
    }
  }
  ngOnDestroy(){
    delete this.item;
    delete this.index;
    this.item = null;
    this.index = null;
  }
  calcularSubTot(){
    if(this.item.data.cantidad <= 0){
      this.onDeleteItemCmp.emit({index: this.index})
    } else {
      this.item.valores.importe = round(this.item.data.rPrecio * this.item.data.cantidad,2);
      this.item.calculaTotales();
      this.onChangeItemCmp.emit({index: this.index})
    }
  }
  calcularCantidad(){
    this.item.calcula_cantidad();
    this.onChangeItemCmp.emit({index: this.index})
  }
  delete(){
    this.onDeleteItemCmp.emit({index: this.index})
  }
}
