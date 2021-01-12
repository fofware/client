import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iProducto } from 'src/app/models/iProducto';
import { ProductosService } from 'src/app/services/productos.service';
import { ArticulosService } from 'src/app/services/articulos.service';
import { CajaService } from 'src/app/services/caja.service';
import { iArticulo } from 'src/app/models/iArticulo';
import { iPersona } from 'src/app/models/iPersonas';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  articuloList: any[] = [];
  clientesList: iPersona[] = [];
  cliente:any = {};
  showClientes: boolean = false;
  showArticulos: boolean = true;
  searchCliente: string = "";
  searchItem: string = "";
  pesable: boolean = false;
  precio: boolean = true;
  stock: boolean = true;
  wait: boolean = false;
  totVta: number = 0;
  vta = {
    fecha: "",
    hora: 0,
    cliente: {name:'Consumidor Final', coeficiente: 1},
    itemsCount: 0,
    subTotal: 0,
    pagoTipo: 0,
    pagoRecargo: 0,
    descuento: 0,
    kartList:[]
  }
//  itemscount: number = 0;
//  subTotal: number = 0;
  pagos:any[] = [
    { name: 'Efectivo', value: 0},
    { name: 'Débito', value: 0.044091},
    { name: 'TC 1 Pago', value: 0.0782},
    { name: 'TC 3 Pagos', value: 0.239893},
    { name: 'TC 6 Pagos', value: 0.409}
  ]
  constructor(
    private cajaService: CajaService,
    private articulosService: ArticulosService,
    private productosService: ProductosService,
    private router: Router
  ) {
//    this.pesable = false;
//    this.searchItem ="";
    this.vtaReset();
    this.listClientes();
    this.listArticulos();
   }

  ngOnInit(): void {
    this.setHeight()
  }
  async setHeight(){
    const element = document.getElementsByTagName('html');
    const h = document.getElementsByTagName('html')[0].clientHeight - 66;
    const b = h-10;
    document.getElementsByTagName('aside')[0].style.height=`${b}px`;
    document.getElementsByTagName('article')[0].style.height=`${b}px`;
    document.getElementsByTagName('nav')[0].style.height=`${b}px`;
    document.getElementById('main').style.height=`${h}px`;
  }

  onResize(event){
    this.setHeight()
  }

  vtaReset(){
    const d = new Date();
    this.vta = {
      fecha: d.toISOString().slice(0,10),
      hora: 0,
      cliente: {name:'Consumidor Final', coeficiente: 1},
      itemsCount: 0,
      subTotal: 0,
      pagoTipo: 0,
      pagoRecargo: 0,
      descuento: 0,
      kartList:[]
    }
  }

  listArticulos(){
    this.searchItem= <any>[];
    this.searchArticulos();
  }
  searchArticulos() {
    if (this.wait) return;
    this.wait = true;
    let Articulo = {};
    let Producto = {};
    if (this.searchItem.length > 0) {
      let searchItem = this.searchItem.replace(/  /g, " ");
      const array:any[] = searchItem.trim().split(" ");

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        array[index] = {name: {$regex:`${element}`, mod:'i'}}
      }
      Articulo['$and']= array;
    }
    
    if(this.pesable) Producto['pesable']= true;
    if(this.precio) Producto['precio']={$gt:0};
    if(this.stock) Producto['$or']=[{'stock': {$gt:0}}, {'$and':[{'pesable':true},{'sumaTotal':{$gt: 0}}]}]
    
    this.cajaService.buscaProductos({Articulo,Producto}).subscribe(
      res => {
        console.log(res)
        const data = <any>res
        if(data.length == 1 && Articulo['$and'].length == 1 && (this.searchItem == data[0].codigo || this.searchItem == data[0].plu )){
          this.addProducto(this.recargo(data[0]));
          this.searchItem = "";
          this.wait = false;
          //if (this.articuloList.length <= 10)
           this.searchArticulos();
        } else {
          this.normalizeData(data);
        }
//        this.doRecargo(data);
        this.wait = false;
      },
      err => {
        console.log(err);
        this.wait = true;
      }
    )
  }
  normalizeData(data:any){
    this.articuloList = [];
    for (let i = 0; i < data.length; i++) {
      const producto = data[i];
      const element = { valores: {
        precio: 0
        ,recargo:0
        ,total: 0
        ,descuento: 0
      }, producto }
      this.articuloList.push(this.recargo(element))
    }
  }

  addProducto(item){
    if (this.findAndAdd(item.producto.id, item.producto.pesable) === false){
      let newItem = JSON.parse(JSON.stringify(item));
      newItem.cantidad = 1;
      newItem.importe = parseFloat(newItem.valores.precio);
      newItem.descuento = parseFloat('0');
      this.vta.kartList.push(newItem);
    }
    this.totalizar();
    if(item.producto.pesable){
      setTimeout(()=>{
        const childs = document.getElementsByTagName("app-caja-kart")
        const elems = childs[childs.length-1].getElementsByTagName('input') 
        elems[0].select();
        elems[0].focus();
      },100)
    }
  }

  changeProduct(param){
    const idx = param.index

    this.vta.kartList[idx].cantidad = parseFloat(this.vta.kartList[idx].cantidad);
    this.vta.kartList[idx].descuento = parseFloat(this.vta.kartList[idx].descuento);
    this.vta.kartList[idx].importe = parseFloat(this.vta.kartList[idx].importe);

    this.vta.kartList[idx].valores.descuento = parseFloat(this.vta.kartList[idx].valores.descuento);
    this.vta.kartList[idx].valores.precio = parseFloat(this.vta.kartList[idx].valores.precio);
    this.vta.kartList[idx].valores.descuento = parseFloat(this.vta.kartList[idx].valores.descuento);
    this.vta.kartList[idx].valores.recargo = parseFloat(this.vta.kartList[idx].valores.recargo);
    this.vta.kartList[idx].valores.total = parseFloat(this.vta.kartList[idx].valores.total);
    
    if (this.vta.kartList[idx].cantidad <= 0){
      this.vta.kartList.splice(idx,1)
    } else {
      this.vta.kartList[idx].valores.total = parseFloat(((this.vta.kartList[idx].valores.precio * this.vta.kartList[idx].cantidad) - this.vta.kartList[idx].descuento).toFixed(2)); 
    }
    this.totalizar();
    document.getElementById('busca').focus()
  }

  find(id){
    for (let i = 0; i < this.vta.kartList.length; i++) {
      if(id == this.vta.kartList[i].producto.id){
        return i;
      }
    }
    return false;
  }

  findAndAdd(id, pesable){
    if (!pesable){
      for (let i = 0; i < this.vta.kartList.length; i++) {
        if(id == this.vta.kartList[i].producto.id){
          this.vta.kartList[i].cantidad++;
          this.vta.kartList[i].valores.total = parseFloat((this.vta.kartList[i].valores.precio * this.vta.kartList[i].cantidad).toFixed(2));
          return true;
        }
      }
    }
    return false;
  }
  totalizar(){
    this.vta.itemsCount = 0;
    this.vta.subTotal = 0
    for (let i = 0; i < this.vta.kartList.length; i++) {
      const element = this.vta.kartList[i];
      this.vta.subTotal += parseFloat(element.valores.total.toFixed(2));
      this.vta.itemsCount += (this.vta.kartList[i].producto.pesable == true) ? 1 : element.cantidad;
    }
//    this.vta.subTotal = parseFloat(this.vta.subTotal.toFixed(2));
  }
  changePago(){
//    this.vta.pagoRecargo = parseFloat((this.vta.subTotal * this.pagos[this.vta.pagoTipo].value).toFixed(2));
    this.articuloList = this.doRecargo(this.articuloList);
//    this.vta.kartList = this.doRecargo( this.vta.kartList);
    this.totalizar();
  }
  doRecargo(data:any[]){
    for (let i = 0; i < data.length; i++) {
      data[i] = this.recargo(data[i]);
    }
    return data;
  }
  recargo(element){
    const cnt = (element.cantidad) ? element.cantidad : 1;
    element.valores.precio = element.producto.precio * this.vta.cliente.coeficiente;
    element.valores.recargo = parseFloat((this.pagos[this.vta.pagoTipo].value*element.valores.precio).toPrecision(2));
    element.valores.precio = parseFloat((element.valores.precio + element.valores.recargo).toFixed(2));
    element.valores.total = parseFloat((((element.valores.precio)*cnt)-element.valores.descuento).toFixed(2));
    return element;
  }
  listClientes(){
    this.cajaService.listaClientes({}).subscribe(
      res => {
        console.log(res)
        this.clientesList = <any>res;
      }, error => {
        console.log(error);
      })
  }
  searchClientes(){

  }
  setCliente(cliente){
    this.showClientes = !this.showClientes;
    this.showArticulos = !this.showArticulos;
    this.vta.cliente = cliente;
    this.vta.cliente.coeficiente = cliente.coeficiente;
    this.vta.cliente.name = `${cliente.apellido} ${cliente.nombre}`
    this.articuloList = this.doRecargo(this.articuloList);
//    this.vta.kartList = this.doRecargo( this.vta.kartList);
    this.totalizar();
  }
  clienteSelect(){
    if (this.showClientes && this.vta.cliente.name != 'Selecciona Cliente'){
      if (confirm('Quitar cliente')){
        this.vta.cliente = {name: 'Selecciona Cliente', coeficiente: 1}
        this.articuloList = this.doRecargo(this.articuloList);
//        this.vta.kartList = this.doRecargo( this.vta.kartList);
        this.totalizar();
      }
    }
    this.showClientes = !this.showClientes;
    this.showArticulos = !this.showArticulos;
  }
  pagar(){
    this.vta.hora = new Date().getTime()
    console.log(this.vta)
    this.cajaService.add(this.vta).subscribe(res=>{
      console.log(res)
      this.vtaReset();
    }, error => {
      console.log(error)
    })
  }
  Testing(){
    this.vta.hora = new Date().getTime()
    console.log(this.vta)
/*
    this.cajaService.add(this.vta).subscribe(res=>{
      console.log(res)
      this.vtaReset();
    }, error => {
      console.log(error)
    })
*/
  }
  Totales(){
    try {
      const param = {fecha: this.vta.fecha};
      this.totVta =  0;
      this.cajaService.totalesVta(param).subscribe( res => {
        console.log(res);
        const data:any[] = <any>res;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          this.totVta += parseFloat(element.subTotal);
        }

      })
    } catch (error) {
      
    }
  }
}
