import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  cmpSetting = {
    tipo: "Venta"
  };

  articuloSetting = {
    pesable: { value: false,  display: true, qry: true}
  , precio: { value: false, display: false,  qry: {$gt: 0}}
//  , stock:  { value: true, display: true,  qry: [{ 'stock': {$gt: 0}}, { '$and': [{ 'pesable': true },{ 'sumaTotal': {$gt: 0}}]}]}
  , stock:  { value: true, display: true,  qry: {$gt: 0} }
  , servicio: { value: false, display: false, qry: {$eq: true} }
  , pCompra: { value: false, display: true, qry: { $eq: true }}
  , pVenta: { value: true, display: true, qry: { $eq: true }}
   };

  constructor() { }

  ngOnInit(): void {
  }

}
