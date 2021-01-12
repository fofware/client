import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { iPlu } from '../models/iPlus';
import { Observable } from 'rxjs';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class PlusService {

//  ApiUri = 'http://192.168.0.2:3000/api'

  ApiUri = API_URI;

  constructor(private http: HttpClient) { 

  }
  getPlus() {
    return this.http.get(`${this.ApiUri}/plus/lista`);
  }
  getPlu(id: string){
    return this.http.get(`${this.ApiUri}/plus/${id}`);
  }
  deletePlu(id: string){
    return this.http.delete(`${this.ApiUri}/plus/${id}`);
  }
  addPlu(plu: iPlu){
    return this.http.post(`${this.ApiUri}/plus/`, plu);
  }
  updatePlu(id: string|number, updatedPlu: iPlu): Observable<iPlu>{
    return this.http.put(`${this.ApiUri}/plus/${id}`, updatedPlu);
  }
}
