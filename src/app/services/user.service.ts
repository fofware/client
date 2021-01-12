import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/iUser';
import { API_URI } from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUri = API_URI;

  constructor(private http: HttpClient ) {}

  list() {
    return this.http.get(`${this.ApiUri}/users/list`);
  }

  search( search: string ): Observable<IUser>{
    return this.http.get(`${this.ApiUri}/users/search/${search}`);  
  }

  get(id: number){
    return this.http.get(`${this.ApiUri}/user/${id}`);
  }

  delete(id: number){
    return this.http.delete(`${this.ApiUri}/user/${id}`);
  }

  add(persona: IUser ){
    return this.http.post(`${this.ApiUri}/user/add/`, persona);
  }

  update(id: string|number, updatedPersona: IUser ): Observable<IUser>{
    return this.http.put(`${this.ApiUri}/user/${id}`, updatedPersona );
  }
}
