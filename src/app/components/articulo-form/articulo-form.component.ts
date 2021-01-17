import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { iArticulo } from 'src/app/models/iArticulo';
import { iProducto } from 'src/app/models/iProducto';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})

export class ArticuloFormComponent implements OnInit {

  done: boolean;
  edit: boolean;
  inputData: iArticulo;
  articulo: iArticulo;
  producto: iProducto;
  prodList: iProducto[];
  del_List: iProducto[];
  unidades: [{ id: any, name: string }]

  /*
  uVtatmp: {
    name: ''
    , cantidad: 0
    , medida: ''
    , precio: 0
    , pesable: false
    , stock: false
  }
*/
  constructor(
    private articulosService: ArticulosService,
    private productosService: ProductosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.done = true;
    this.edit = false;
    /*
        this.uVtatmp = {
          name: ''
          , cantidad: 0
          , medida: ''
          , precio: 0
          , pesable: false
          , stock: false
        };
    */
//    this.inputData = {};
//    this.articulo = {};
    this.producto = {};
    this.prodList = [];
    this.del_List = [];
    this.unidades = [{ id: null, name: null }];
    const values = this.activatedRouter.snapshot.params;
    if (values.id) {
      this.edit = true;
      this.done = false;
      this.find(values.id);
    } else {
      articulosService.newId().subscribe(ret => {
        this.articulo._id = ret;
      },
        err => {
          console.log(err);
        });

      this.edit = false;
      this.done = true;
    }
  }

  ngOnInit(): void { }

  productoReset() {
    this.producto = {};
  }

  find(id) {
    this.articulosService.getProductos(id).subscribe(
      res => {
        this.done = true;
//        this.inputData = res;
        const algo: any = res;
        this.articulo = algo;
/*
        this.prodList = this.articulo.productos;
//        delete this.articulo.productos;
        for (let index = 0; index < this.prodList.length; index++) {
          const e = this.prodList[index];
          this.prodList[index].parentname = this.readParent(e.parent);
          const unid = { id: e._id, name: this.readParent(e._id) };
          this.prodList[index].infile = true;
          this.prodList[index].changed = false;
          if (!this.unidades) this.unidades = [unid];
          else this.unidades.push(unid);
        }
        this.productoReset();
*/
      },
      err => {
        this.done = true;
        console.log(err);
      }
    );
  }

  update() {
    //    if(this.del_List.length > 0)
    //      this.productosService.deleteMany(this.del_List)
    this.articulosService
    .update(this.articulo._id, this.articulo)
    .subscribe(
      res => {
        console.log(res);
        this.done = true;
        this.router.navigate(['/articulos']);
      }
      , err => {
        console.log(err);
      }
    );
/*


    this.productosService
    .update(this.prodList)
    .subscribe(rpta => {
      this.articulosService
      .update(this.articulo._id, this.articulo)
      .subscribe(
        res => {
          this.done = true;
          this.router.navigate(['/articulos']);
        }
        , err => {
          console.log(err);
        }
      );
    },
      err => {
        console.log(err);
    });
  */
  }

  add() {
    this.articulosService.add(this.articulo).subscribe(
      rpta => {
        this.productosService.insertMany(this.prodList).subscribe(
          rptap => {
            this.done = true;
            this.router.navigate(['/articulos']);
          }
        )
      }
    );
  }

  addProducto() {
    for (let n = 0; n < this.prodList.length; n++) {
      const e = this.prodList[n];
      if(e.name == this.producto.name
        && e.unidad == this.producto.unidad
        && e.contiene == this.producto.contiene) {
          console.log( "producto ya existe", e )
          return
      }

    }
    this.articulosService.newId().subscribe(ret => {
      this.producto.articulo = this.articulo._id;
      this.producto._id = ret;
      this.producto.changed = true;
      if (this.producto.parent != "")
        this.producto.parentname = this.readParent(this.producto.parent)
      if (!this.prodList)
        this.prodList = [this.producto];
      else
        this.prodList.push(this.producto);
      const unid = { id: this.producto._id, name: this.readParent(this.producto._id) };
      if (!this.unidades)
        this.unidades = [unid]
      else
        this.unidades.push(unid);
      this.productoReset();
    }, err => {
      console.log(err);
    })
  }
  updateProducto(idx,producto){
    this.productosService.put(producto).subscribe( ret => {
      this.prodList[idx].changed = false;
    }, error => {
      console.log(error);
    })
  }

  readParent(id: Object, descr?: string) {
    if (descr == undefined) descr = '';
    const item = this.findProduct(id);
    if (item._id) {
      if (`${item._id}` == `${item.parent}` || item.parent == undefined) item.parent = null
      if (item.contiene && item.contiene > 1) descr += `${item.name} ${item.contiene} ${item.unidad}`
      else if (item.unidad) descr += `${item.name} ${item.unidad}`
      else descr += `${item.name}`
      if (item.parent != null) {
        descr = this.readParent(item.parent, descr);
      }
    }
    return descr.trim();
  }

  findProduct(id: Object): iProducto {
    for (let index = 0; index < this.prodList.length; index++) {
      const element: iProducto = this.prodList[index];
      if (element._id == id) return element;
    }
    return {};
  }

  eventos(ev) {
    console.log("Select_ev", ev, this.readParent(this.producto.parent));
  }

  save() {
    console.log(this.articulo);
    console.log(this.prodList);
    /*
        this.productosService
        .insertMany(this.prodList)
        .subscribe(
          rpta => {
          console.log(rpta);
        }, err => {
          console.log(err);
        })
    */
  }

  delProducto(id) {
    if(this.prodList[id].infile == true){
      if (this.del_List.length == 0) this.del_List[0] = this.prodList[id]
      else this.del_List.push(this.prodList[id])
    }
    console.log(this.del_List);
    this.prodList.splice(id, 1);
  }
}
