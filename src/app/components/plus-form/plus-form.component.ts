import { Component, OnInit, HostBinding, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { iPlu } from 'src/app/models/iPlus';
import { PlusService } from '../../services/plus.service';
@Component({
  selector: 'app-plus-form',
  templateUrl: './plus-form.component.html',
  styleUrls: ['./plus-form.component.css']
})
export class PlusFormComponent implements OnInit {

  plu: iPlu = {
    id: 0
    , description: ''
    , pesable: 0
    , precio: 0
    , vencimiento: 0
  }

  //  @ViewChild("idInput") idElement: ElementRef;
  
    @ViewChild("descriptionInput") descriptionElement: ElementRef;
  
    ngAfterViewInit(){
//      console.log(this.descriptionElement);
    }
  


  edit: boolean;

  constructor(
    private pluService: PlusService,
    private router: Router,
    private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.edit = false;
    const values = this.activedRouter.snapshot.params;
    if (values.id) {
      this.findPlu(values.id);
    } else this.plu = {
      id: 0
      , description: ''
      , pesable: 0
      , precio: 0
      , vencimiento: 0
    }
  }

  findPlu(id: string | number) {
    this.pluService.getPlu(id.toString()).subscribe(
      res => {
        if (res[0] !== undefined) {
          this.plu = res[0];
          this.edit = true;
        } else {
          this.edit = false;
          this.plu = {
            id: id
            , description: ''
            , pesable: 0
            , precio: 0
            , vencimiento: 0
          }
        }
        this.descriptionElement.nativeElement.focus();
      }
      , err => {
        this.edit = false;
        this.plu.id = id;
        this.plu.description = '';
        this.plu.pesable = 0;
        this.plu.precio = 0;
        this.plu.vencimiento = 0;
        //        this.idElement.nativeElement.focus();
      }
    );
  }

  saveNewPlu() {
    this.pluService.addPlu(this.plu).subscribe(
      res => {
        this.router.navigate(['/plus'])
      },
      err => { console.log(err.error) }
    )
  }

  updatePlu() {
    this.pluService.updatePlu(this.plu.id, this.plu)
      .subscribe(
        res => {
          this.router.navigate(['/plus'])
        },
        err => { console.log(err.error) }
      )
  }

}
