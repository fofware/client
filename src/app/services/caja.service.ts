import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
//  ApiUri = '.:3000/api'
  ApiUri = API_URI;
  
  constructor(private http: HttpClient) { }

  buscaProductos(params:any){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/buscaProductos`, params ).subscribe(res => {
        const data:any = res;
//        const rpta = this.coockProdList(res);
        observer.next(res)
        // observable execution
        observer.complete()
      })
    })
  }
  listaClientes(params:any){
    return new Observable((observer) => {
      this.http.get(`${this.ApiUri}/personas/list` ).subscribe(res => {
        const data:any = res;
//        const rpta = this.coockProdList(res);
        observer.next(res)
        // observable execution
        observer.complete()
      })
    })
  }
  add(params:any){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/add`, params ).subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }
  totalesVta(params){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/tmpvta`, params ).subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }

  totalesProductos(params){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/productos`, params ).subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }
  detallesVta(params){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/tmpvta`, params ).subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }
  totalesVtaFecha(params){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/caja/fecha`, params ).subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }
}
