import { Component, OnInit } from '@angular/core';
import { Comprobante } from 'src/app/models/comprobante';
import { iPersona } from 'src/app/models/iPersonas';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})

export class ComprasComponent implements OnInit {

  cmpSetting = {
    tipo: "Compra"
  };

  articuloSetting = {
    pesable:{ value:false,  display:true, qry: {$eq: true}}
  , precio: { value:false, display:true,  qry: {$gt:0}}
  , stock:  { value:false, display:true,  qry: [{'stock': {$gt:0}} ]}
  , servicio: { value: false, display: true, qry: {$eq: true} }
  , pCompra: { value: true, display: true, qry: { $eq: true }}
  , pVenta: { value: false, display: true, qry: { $eq: true }}
  };
  
  constructor() {}
  
  ngOnInit(): void {
  }
}
