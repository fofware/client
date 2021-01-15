import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { decimales, round, tpLista, tpPagos } from 'src/app/common/utils';
import { Comprobante } from 'src/app/models/comprobante';
import { ComprobantesService } from 'src/app/services/comprobantes.service';

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css']
})

export class ComprobantesComponent implements OnInit {

  @Input() articuloSetting: any;
  @Input() cmpSetting: any;

  showArticulos = true;
  hiddenKart = false;
  showKart = true;
  showPersona = false;
  showPago = false;

  tpPagos: any[] = tpPagos;
  tpLista: any[] = tpLista;


  cmp: Comprobante;

  constructor(private comprobante: ComprobantesService
    ,         private router: Router
    ) { }

  ngOnInit(): void {
    this.setHeight();
    this.cmpReset();
  }

  async setHeight(){
    const element = document.getElementsByTagName('html');
    const h = document.getElementsByTagName('html')[0].clientHeight;
    const b = h;
    document.getElementsByTagName('aside')[0].style.height = `${b}px`;
    document.getElementsByTagName('article')[0].style.height = `${b}px`;
  }

  onResize(event){
    this.setHeight();
  }
  totalizar(){
  }
  getdate(): string {
    const d = new Date();
    return [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2)
    ].join('-');
  }
  cmpReset(){
    this.cmp = new Comprobante();
    this.cmp.setTipo(this.cmpSetting.tipo);
    this.cmp.data.ca_pago = this.tpPagos[this.cmp.data.pagoTipo];
    this.cmp.data.fecha = this.getdate();
  }
  addProducto(data: any){
    this.cmp.add(data);
    this.cmp.calcula();
    setTimeout(() => {
      const objDiv = document.getElementById('itemsCmp');
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 50);
  }
  deleteProducto(evt){
    console.log(evt);
    const idx = evt.index;
    this.cmp.deleteItem(idx);
    this.cmp.calcula();
  }
  changeView(i: number){
    this.showKart = false;
    this.showPago = false;
    this.showPersona = false;
//    const objDiv = document.getElementById("browseArticulos");
    console.log(this.cmp);
    switch (i) {
      case 2:
        this.showPersona = true;
        this.showArticulos = false;
//        objDiv.style.display = "none";
        break;
      case 3:
        this.showPago = true;
//        objDiv.style.display = "none";
        this.showArticulos = false;
        break;
      default:
        this.showKart = true;
        this.showArticulos = true;

//        objDiv.style.display = "unset";
        break;
    }
  }
  setPersona(event){
    this.cmp.data.persona = event;
    if (!this.cmp.data.persona.name) {
      this.cmp.data.persona.name = `${this.cmp.data.persona.apellido} ${this.cmp.data.persona.nombre}`;
    }
    const objDiv = document.getElementById('browseArticulos');
    objDiv.style.display = 'unset';
    this.cmp.setClient();
    this.showKart = true;
    this.showPago = false;
    this.showPersona = false;
  }
  changePago(){
    this.cmp.data.ca_pago = this.tpPagos[this.cmp.data.pagoTipo];
    this.cmp.setPago();
  }
  changeLista(){
    this.cmp.data.ca_lista = this.tpLista[this.cmp.data.listaTipo];
    this.cmp.setLista();
  }
  recalcula(){
    console.log('recalcula');
    this.cmp.calcula();
  }
  grabar(){
    const toSave = JSON.parse(JSON.stringify(this.cmp.data));
    delete toSave.items;
    const array = JSON.parse(JSON.stringify(this.cmp.data.items));
    toSave.items = [];
    for (let i = 0; i < array.length; i++) {
      const e = JSON.parse(JSON.stringify(array[i].data));
      e.name = e.producto.fullName;
      e.compra = e.producto.compra;
      e.sumaCompra = round(e.compra * e.cantidad, decimales);
      e.reposicion = e.producto.reposicion;
      e.sumaReposicion = round(e.reposicion * e.cantidad, decimales);
      delete e.producto;
      toSave.items.push(JSON.parse(JSON.stringify(e)));
    }
    const usuario: any = JSON.parse(localStorage.get('user'));
    toSave.operator = usuario._id;

    console.log('Se manda al servidor');
    console.log(toSave);

    this.comprobante.save(toSave).subscribe(res => {
      console.log('Respuesta Servidor');
      console.log(res);
    },
    error => {
      console.log(error);
    });

//    console.log(location)
    this.changeView(1);
    const tipo = this.cmp.data.tipo;
    this.cmp.storageDelete();
    this.cmpReset();
    this.cmp.setTipo(tipo);
    console.log(location.pathname);
    this.router.navigateByUrl(location.pathname);
  }
}
