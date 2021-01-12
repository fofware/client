import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPersona } from '../models/iPersonas';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {

//  ApiUri = 'http://192.168.0.2:3000/api'
  ApiUri = API_URI;
  
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(`${this.ApiUri}/personas/list`);
  }

  search( search: string ): Observable<any>{
    return this.http.get(`${this.ApiUri}/personas/search/${search}`);  
  }

  find( search: string ): Observable<any>{
    console.log(search);
    return this.http.post(`${this.ApiUri}/persona/find`,{search});  
  }

  get(id: number){
    return this.http.get(`${this.ApiUri}/persona/${id}`);
  }

  delete(id: number){
    return this.http.delete(`${this.ApiUri}/persona/${id}`);
  }

  add(persona: iPersona ){
    return this.http.post(`${this.ApiUri}/persona/add/`, persona);
  }

  update(id: string|number, updatedPersona: iPersona ): Observable<any>{
    return this.http.put(`${this.ApiUri}/persona/${id}`, updatedPersona );
  }
}
