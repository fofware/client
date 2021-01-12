import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-caja-kart',
  templateUrl: './caja-kart.component.html',
  styleUrls: ['./caja-kart.component.css']
})
export class CajaKartComponent implements AfterViewInit,  OnInit,  AfterContentInit, AfterViewChecked {
  @Input() item: any = [];
  @Input() index: number;
  @Output() onChangeProduct = new EventEmitter<object>();  

  constructor() {
//    const element = document.querySelector('app-caja-kart');
//    console.log("constructor",element)
  }

  ngAfterViewInit() {
    const objDiv = document.getElementById("items");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  ngAfterContentInit(){
//    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(){
//    console.log("ngAfterViewChecked");
  }
  ngOnInit(): void {
//    console.log("ngOnInit")
  }
  sustract(){
//    console.log(this.item)
    this.item.cantidad--;
    if (this.item.producto.pesable) this.item.cantidad = 0
    this.recalculate()
  }
  recalculate(){
    this.onChangeProduct.emit({index: this.index});
  }
  calcula_peso(){
    if (this.item.producto.pesable){
      this.item.cantidad = parseFloat((this.item.importe/this.item.valores.precio).toFixed(3));
    }
    this.onChangeProduct.emit({index: this.index});
  }
}
