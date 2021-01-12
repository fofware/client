import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { iPersona } from 'src/app/models/iPersonas';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  edit: boolean;
  persona: iPersona;
  done: boolean;

  constructor(
    private personaService: PersonasService
    , private router: Router
    , private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.done = true;
    this.persona = {
      email: ''
      , nombre: ''
      , apellido: ''
      , cuit: ''
      , fijo: ''
      , celular: ''
      , direccion: ''
      , localidad: ''
      , provincia: ''
      , zipcode: ''
      , pais: ''
      , coeficiente: 1
      , categoria: []
    }
    this.edit = false;
    const values = this.activatedRouter.snapshot.params;
    if (values.id) {
      this.edit = true;
      this.done = false;
      this.find(values.id);
    }
  }

  find(id){
    this.personaService.get(id).subscribe( 
      res => {
        this.done = true;
        this.persona = <any>res;
      },
      err => {
        this.done = true;
        console.log(err)
      }
    );
  }

  update (){
    this.personaService.update( this.persona._id, this.persona ).subscribe(
      res => {
        this.done = true;
        this.router.navigate(['/personas']);
      }
      , err => {
        console.log(err);
      }
    );
  }

  add (){
    this.personaService.add(this.persona).subscribe(
      res => {
        this.done = true;
        this.router.navigate(['/personas']);
      }
      , err => {
        console.log(err);
      }
    );
  }

}