import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { iPersona } from 'src/app/models/iPersonas';
import { iProducto } from 'src/app/models/iProducto';
import { ProductosService } from 'src/app/services/productos.service';
import { iProveedoresArticulos } from 'src/app/models/iProveedoresArticulos';
import { ProveedoresArticulosService } from 'src/app/services/proveedores-articulos.service';

@Component({
  selector: 'app-proveedor-listas',
  templateUrl: './proveedor-listas.component.html',
  styleUrls: ['./proveedor-listas.component.css']
})
export class ProveedorListasComponent implements OnInit {
  productosList:iProducto[] = [];
  provArtList:iProveedoresArticulos[] = [];
  personasList:iPersona[] = [];
  wait:boolean = false;
  searchItem:string = "";
  proveedor:string = "Choose...";
  constructor(
    private personasService: PersonasService, 
    private productosService: ProductosService,
    private provArtService: ProveedoresArticulosService
  ) {}
  
  ngOnInit(): void {
    this.setHeight();
    this.personas();
  //  this.search();
  }

  search() {
    if (this.wait) return;
    this.wait = true;
    let Articulo = {};
    let Producto = {};
    let Proveedor = { proveedor: this.proveedor }
    if (this.searchItem.length > 0) {
      let searchItem = this.searchItem.replace(/  /g, " ");
      const array: any[] = searchItem.trim().split(" ");

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        array[index] = { name: { $regex: `${element}`, mod: 'i' } }
      }
      Articulo['$and'] = array;
    }
    Producto['pesable'] = { $ne: true };
    this.provArtService.buscar({ Articulo, Producto, Proveedor }).subscribe(
      res => {
        console.log(res)
        this.productosList = this.productosService.coockProdList( res['articulos'] );
        this.provArtList = res['productos']
        this.wait = false;
      },
      err => {
        console.log(err);
        this.wait = true;
      }
    )
  }

  personas() {
    this.personasService.list().subscribe(
      res => {
        console.log(res)
        this.personasList = <any>res;
      }
      , err => {
        console.log(err);
      }
    )
  }
  
  async setHeight(){
    const element = document.getElementsByTagName('html');
    const h = document.getElementsByTagName('html')[0].clientHeight - 220;
    const b = h-10;
    document.getElementsByTagName('aside')[0].style.height=`${b}px`;
    document.getElementsByTagName('article')[0].style.height=`${b}px`;
    document.getElementById('main').style.height=`${h}px`;
  }
  onResize(event){
    console.log(event)
    console.log(event.srcElement.outerHeight, event.srcElement.outerWidth)
    const h = event.srcElement.innerHeight-220;
    const b = h-10;
    document.getElementsByTagName('aside')[0].style.height=`${b}px`;
    document.getElementsByTagName('article')[0].style.height=`${b}px`;
    document.getElementById('main').style.height=`${h}px`;
   }
   
   onAddProduct(event){
    event.producto.proveedor = this.proveedor;
    event.producto.precio = "";
    event.producto.producto = event.producto._id;
    event.producto.ofertas = [];
    const barcode = event.producto.barcode;
    event.producto.codigo = "";
    delete event.producto._id;
//    delete event.producto.image;
//    delete event.producto.pesable;
//    delete event.producto.stock;

    this.provArtService.add(event.producto)
    .subscribe( ret => {
      this.productosList.splice(event.index,1)
      ret['barcode'] = barcode;
      console.log(ret);
      this.provArtList.push(ret);
    },error => {
      console.log(error)
    });


  }
  onChangeProduct(event){
    console.log("changeEvent", event)
    this.provArtService.update(event.producto)
    .subscribe( ret => {
      console.log(ret);
      this.search()
    }, error => {
      console.log(error)
    })
  }
  onDeleteProduct(event){
    console.log('onDeleteProduct', event)
    this.provArtService.delete(event.producto._id)
    .subscribe( ret => {
      console.log(ret);
      this.search();
    }, error => {
      console.log(error)
    });
  }
  selectProveedor(){
    console.log(this.proveedor)
    this.provArtList = [];
    this.search()
  }
}
