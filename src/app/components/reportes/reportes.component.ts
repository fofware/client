import { Component, OnInit } from '@angular/core';
import { CajaService } from 'src/app/services/caja.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  fecha_desde: string = '';
  fecha_hasta: string = '';
  data: any = [];

  constructor( private cajaService: CajaService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.setHeight();
    }, 50);
    this.getdate();
  }

  async setHeight(){
    let resta = 0;
    if (document.getElementsByTagName('footer')[0].offsetHeight > 0)
      resta += document.getElementsByTagName('footer')[0].offsetHeight + 9;
    if (document.getElementsByTagName('header')[0].offsetHeight > 0)
      resta += document.getElementsByTagName('header')[0].offsetHeight + 9;
    const h = document.getElementsByTagName('app-reportes')[0].parentElement.parentElement.parentElement.clientHeight - resta;
    document.getElementById('main').style.height=`${h}px`;
  }

  getdate() {
    const d = new Date();

    console.log(d.getMonth())
    this.fecha_desde = [
      d.getFullYear(),
      ('0' + d.getMonth() ).slice(-2),
      ('0' + d.getDate()).slice(-2)
    ].join('-');

    this.fecha_hasta = [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2)
    ].join('-');
  }
  detalleVtas(){
    console.log("Productos");
    this.cajaService.totalesVta({ 'fecha': { '$gte': this.fecha_desde, '$lte': this.fecha_hasta } }).subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    )
  }

  totalDiario(){
    console.log("TotalDiario");
    this.cajaService.totalesVtaFecha({ 'fecha': { '$gte': this.fecha_desde, '$lte': this.fecha_hasta } }).subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  totalProductos(){
    console.log("Productos");
    this.cajaService.totalesProductos({ 'fecha': { '$gte': this.fecha_desde, '$lte': this.fecha_hasta } }).subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
