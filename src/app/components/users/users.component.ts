import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iUser';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  regList: IUser[];
  searchItem: string;
  wait: boolean = false;

  constructor (
    private userService: UserService, 
    private router: Router
  ) { 
    this.lista()
  }
  ngOnInit(): void {
  }
  lista() {
    this.userService.list().subscribe(
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
      this.userService.delete(i).subscribe( res => {
        this.lista();
      },
      err => {
        console.log(err)
      })
    }
  }
  get(i:number){
    this.userService.get(i).subscribe(res => {
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
      this.userService.search(this.searchItem).subscribe(
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
