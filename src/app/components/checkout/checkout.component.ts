import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { API_URI } from 'src/app/common/utils';
import { ComprobantesService } from 'src/app/services/comprobantes.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() cmp: any = {};
  @Output() onSave = new EventEmitter<object>();
  
  saldo: number = 0;
  ApiUri = API_URI;

  constructor(private http: HttpClient,
    private comprobante: ComprobantesService) { }

  ngOnInit(): void {
    this.saldo = this.cmp.sumaCobro;
    this.cmp.addPago({'tipo': 'Efectivo', 'value': 0, saldo: this.saldo, vuelto: 0});
    this.cmp.sumarPagos();
  }

  addPago(idx){
    switch (idx) {
      case 2:
        break;
    
      default:
        this.cmp.addPago({'tipo': 'Efectivo', value: 0, saldo: this.saldo, vuelto: 0});
        break;
    }
    this.cmp.sumarPagos();
    console.log(this.cmp.pagos)
  }
  deletePago(idx){
    this.cmp.deletePago(idx);
  }
  evente(element: HTMLElement){
    console.log(element.textContent);
  }
  evento(idx){
    this.cmp.sumarPagos();
    console.log();
  }
  grabar(){
    this.onSave.emit()
  }
}
