import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iUser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  edit: boolean;
  user: IUser;
  done: boolean;

  constructor(
    private userService: UserService
    , private router: Router
    , private activatedRouter: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.done = true;
    this.user = {
      email: ''
      , password: ''
      , password2: ''
      , nombre: ''
      , apellido: ''
      , fijo: ''
      , celular: ''
      , direccion: ''
      , localidad: ''
      , provincia: ''
      , zipcode: ''
      , pais: ''
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
    this.userService.get(id).subscribe( 
      res => {
        this.done = true;
        this.user = res;
      },
      err => {
        this.done = true;
        console.log(err)
      }
    );
  }

  update (){
    this.userService.update( this.user._id, this.user ).subscribe(
      res => {
        this.done = true;
        this.router.navigate(['/users']);
      }
      , err => {
        console.log(err);
      }
    );
  }

  add (){
    this.userService.add(this.user).subscribe(
      res => {
        this.done = true;
        this.router.navigate(['/users']);
      }
      , err => {
        console.log(err);
      }
    );
  }

}
