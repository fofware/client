import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {
  ApiUri = API_URI;
  constructor( private http: HttpClient ) { }

  save(comp: any){
    console.log("save");
    return new Observable((observer) => {
      this.http.post(`${this.ApiUri}/comprobante/add`, comp)
      .subscribe(res => {
        observer.next(res);
        observer.complete();
      })
    })
  }
}
