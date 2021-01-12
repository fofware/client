import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Router } from '@angular/router';

import {iPersona} from '../../models/iPersonas'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  regList: iPersona[];
  searchItem: string;
  wait: boolean = false;

  constructor(
    private personasService: PersonasService, 
    private router: Router) { 
    this.lista()
  }

  ngOnInit(): void {
  }
  lista() {
    this.personasService.list().subscribe(
      res => {
        this.regList = <any>res;
      }
      , err => {
        console.log(err);
      }
    )
  }
  delete(i:number){
    if ( confirm('Esta Seguro que quiere borrar este registro') ){ 
      this.personasService.delete(i).subscribe( res => {
        this.lista();
      },
      err => {
        console.log(err)
      })
    }
  }
  get(i:number){
    this.personasService.get(i).subscribe(res => {
      this.lista();
    },
    err => {
      console.log(err);
    })
  }
  search() {
    if (this.wait) return;

    if (this.searchItem.length == 0) {
      this.lista();
      this.wait = false;
      return;
    }
      this.wait = true;
      this.personasService.search(this.searchItem).subscribe(
        res => {
        this.regList = <any>res;
        this.wait = false;
        },
        err => {
          console.log(err);
          this.wait = true;
        }
      )
  }
}
