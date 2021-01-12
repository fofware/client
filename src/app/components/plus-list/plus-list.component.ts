import { Component, OnInit, HostBinding } from '@angular/core';
import { PlusService } from "../../services/plus.service"

@Component({
  selector: 'app-plus-list',
  templateUrl: './plus-list.component.html',
  styleUrls: ['./plus-list.component.css']
})
export class PlusListComponent implements OnInit {

  arrPlus: any = [];

//  @HostBinding('class') clases = 'row'; 
  
  constructor(private plusService: PlusService) { }

  ngOnInit(): void {
    this.getPlus();
  }
  
  getPlus(){
    this.plusService.getPlus().subscribe(
      res => {this.arrPlus = res},
      err => console.error(err)
    );
  }
  
  deletePlu(id:string){
    this.plusService.deletePlu(id).subscribe(
      res => {
        this.getPlus();
      },
      err => {console.log(err.error)}
    )
  }
}
