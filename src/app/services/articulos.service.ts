import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iArticulo } from '../models/iArticulo';
import { API_URI } from '../common/utils';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

//  ApiUri = 'http://192.168.0.2:3000/api'
  ApiUri = API_URI;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${this.ApiUri}/articulos/list`);
  }
  listProductos() {
    const parameters = {Articulo: {}, Producto: {}};
//    const parameters = {};
    console.log(parameters);
    const obs = new Observable((observer) => {
      this.http.post(`${this.ApiUri}/articulos/productos/list`, parameters)
      .subscribe( rpta => {
//        this.checkParent(rpta);
        observer.next(rpta);
        // observable execution
        observer.complete();
      });
    });
    return obs;
  }
  listaSearchProd(parameters){
    console.log(parameters);
    const obs = new Observable((observer) => {
      this.http.post(`${this.ApiUri}/articulos/productos/list`, parameters)
      .subscribe( rpta => {
        this.checkParent(rpta);
        observer.next(rpta);
        // observable execution
        observer.complete();
      });
    });
    return obs;
  }
  get(id: number){
    return this.http.get(`${this.ApiUri}/articulo/${id}`);
  }
  leerArticuloProductos( id: string ){
    return this.http.get(`${this.ApiUri}/articulo/productos/${id}`);
  }
  delete(id: string){
    return this.http.delete(`${this.ApiUri}/articulo/${id}`);
  }
  add(articulo: iArticulo ){
    return this.http.post(`${this.ApiUri}/articulo`, articulo);
  }
  update(id: any, updatedArticulo: iArticulo ): Observable<any>{
    console.log(updatedArticulo);
    return this.http.put(`${this.ApiUri}/articulo/${id}`, updatedArticulo );
  }
  search(search: string): Observable<any>{
    const obs = new Observable((observer) => {
      this.http.get(`${this.ApiUri}/articulos/productos/:search/${search}`)
      .subscribe( rpta => {
        this.checkParent(rpta);
        observer.next(rpta);
        // observable execution
        observer.complete();
      });
    });
    return obs;
  }
  searchProductos(search: string): Observable<any>{
    const obs = new Observable((observer) => {
      this.http.get(`${this.ApiUri}/articulos/productos/list/${search}`).subscribe( rpta => {
        this.checkParent(rpta);
        observer.next(rpta);
        // observable execution
        observer.complete();
      });
    });
    return obs;
  }
  newId(){
    return this.http.get(`${this.ApiUri}/Oid`);
  }
  checkParent(regs){
    // tslint:disable-next-line:prefer-for-of
    for (let inx = 0; inx < regs.length; inx++) {
      const e = regs[inx];
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < e.productos.length; index++) {
        const p = e.productos[index];
        if (p.parent === p._id) {
          console.log(e);
        }
        if (p.parent && p.parent !== p._id && p.pesable === false){
          console.log('ENTRO', e, p);
          p.parentname = this.readParent(e.productos, p._id);
        } else {
          p.parentname = `${p.name} ${p.contiene} ${p.unidad}`;
        }
      }
    }
  }
  readParent(prodList, id: any, descr?: string) {
    if (descr === undefined) { descr = ''; }
    const item = this.findProduct(prodList, id);
    if (item._id) {
      if (item.contiene && item.contiene > 1) {
       descr += (item.unidad ? ` ${item.name} ${item.contiene} ${item.unidad}` : ` ${item.name} ${item.contiene}`);
      }
      else if (item.unidad) { descr += ` ${item.name} ${item.unidad}`; }
      else { descr += ` ${item.name}`; }
      if (item.parent != null && item.parent !== item._id && item.pesable === false) {
        descr = this.readParent(prodList, item.parent, descr);
      }
    }
    return descr.trim();
  }
  findProduct(prodList, id: any ) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < prodList.length; index++) {
      const element = prodList[index];
      if (element._id === id) { return element; }
    }
    return {};
  }
}
