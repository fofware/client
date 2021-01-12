import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProveedoresArticulos } from '../models/iProveedoresArticulos';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresArticulosService {

//  ApiUri = 'http://192.168.0.2:3000/api'
  ApiUri = API_URI;

  constructor(private http: HttpClient) { }

  add(registro: iProveedoresArticulos ): Observable<iProveedoresArticulos>{
    console.log(registro);
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/proveedoresarticulos`, registro).subscribe( 
        ret =>{
          console.log(ret)
          observer.next(<any>ret)
          // observable execution
          observer.complete()
      }, error => {
        observer.error(error)
        observer.complete()
      })
    })
  }
  update(registro: iProveedoresArticulos){
    console.log("update",registro);
    return this.http.put(`${this.ApiUri}/proveedoresarticulos/${registro._id}`, registro );
  }
  delete(id: any){
    console.log("delete",id);
    return this.http.delete(`${this.ApiUri}/proveedoresarticulos/${id}`);
  }
  insMany(registros: iProveedoresArticulos[] ){
    return this.http.post(`${this.ApiUri}/proveedoresarticulos/insmany`, registros);
  }
  buscar (qry){
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/proveedoresarticulos/buscar`, qry).subscribe( 
        ret =>{
          console.log(ret)
          observer.next(ret)
          // observable execution
          observer.complete()
      }, error => {
        observer.error(error)
        observer.complete()
      })
    })
    
  }
}
