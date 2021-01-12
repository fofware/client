import { Component, OnInit } from '@angular/core';
import { iArticulo } from 'src/app/models/iArticulo';
import { ArticulosService } from 'src/app/services/articulos.service';
import { Router } from '@angular/router';
//import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articuloList: iArticulo[];
  searchItem: string;
  wait: boolean = false;

  constructor(
    private articulosService: ArticulosService,
    private router: Router
  ) {
    this.list();
  }

  ngOnInit(): void {
  }

  list() {
    const rpta = this.articulosService.listProductos().subscribe(
      res => {
//        console.log(res)
        this.wait = false;
        this.articuloList = <any>res;
      }
      , err => {
        console.log(err);
      }
    )
  }
  delete(i: string) {
    if (confirm('Esta Seguro que quiere borrar este registro')) {
      this.articulosService.delete(i).subscribe(res => {
        this.list();
      },
        err => {
          console.log(err)
        })
    }
  }
/*
  get(i: number) {
    this.articulosService.get(i).subscribe(res => {
      this.list();
    },
      err => {
        console.log(err);
      })
  }
*/
  search() {
    if (this.wait) return;
    if (this.searchItem.length == 0) {
      this.list();
      this.wait = false;
      return;
    }
    //    if (this.searchItem.length > 2) {
      this.wait = true;
      this.articulosService.searchProductos(this.searchItem).subscribe(
        res => {
          this.articuloList = <any>res;
          this.wait = false;
        },
        err => {
          console.log(err);
          this.wait = true;
        }
      )
//    }
  }
  opModal(){
    const modal = document.getElementById('apiError');
    modal.style.display = "block";
  }
  createHeaders(keys) {
    return keys.map(key => ({
      'name': key,
      'prompt': key,
      'width': 65,
      'align': 'center',
      'padding': 0
    }));
  }
  
  print(){
/*    
    let data = [];
    for (let i = 0; i < this.articuloList.length; i++) {
      const a:any = this.articuloList[i];
      let sumStock = 0;
      for (let n = 0; n < a.productos.length; n++) {
        const p = a.productos[n];
        a.productos[n].stock = (!a.productos[n].stock ? 0: a.productos[n].stock)
        a.productos[n].contiene = (!a.productos[n].contiene ? 0: a.productos[n].contiene)
        sumStock += a.productos[n].contiene*a.productos[n].stock;
      }

      for (let n = 0; n < a.productos.length; n++) {
        const p = a.productos[n];
        if(a.productos[n].pesable && a.productos[n].stock == 0) a.productos[n].stock = sumStock; 
        const line = {
          name: `${a.name} ${p.parentname}`
          ,precio: `${p.precio}` //.toString()
        }
        if (a.productos[n].stock > 0 )
          data.push(line)
      }
    }
    const headers:any = [
      { 
        'name': 'name',
        'prompt': 'Artículo',
        'width': 475,
        'align': 'left',
        'padding': 10
      }
      ,{
        'name': 'precio',
        'prompt': 'Precio',
        'padding': 0,
        'width': 65,
        'align': 'right'
      }
    ];
//    const header = this.createHeaders(["coin", "gamegroup", "game name", "game_version", "machine", "vlt"]);
//    const doc = new jsPDF();
    let doc = new jsPDF( 'p','pt', 'a4', true );

    doc.table(100,100, data, headers,{fonntSize:16,autoSize:false, margins:{ 'left': 100, 'top': 100, 'bottom': 100, 'width':550 }})
    const paginas = doc.getNumberOfPages();
    const date = new Date();
    for (let i = 1; i <= paginas; i++) {
      doc.setPage( i );
      const size = doc.getFontSize()
      doc.setFontSize(22);
      doc.setLineWidth(600);
      doc.text(`Lista de Precios`,300, 50,{'align': 'center'})
      doc.setFontSize(size);
      doc.text(date.toLocaleDateString(),300, 62,{'align': 'center'})
      doc.text(`página ${i} de ${paginas}`,506, 750,{'align': 'right'})
    }
*/
/*
    const y = 23
    const mod = 33
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
//      doc.text(i.toString(),1,y*((i%mod)+1))
//      doc.text(e.name,42,y*((i%mod) + 1));
//      doc.text(e.precio,545,y*((i%mod)+1));
      doc.cell(50, y*((i%mod)+1)-16, 480, 23, e.name, i,"left");
      doc.cell(530, y*((i%mod)+1)-16, 60, 23, e.precio, i, "right");
//      if(i%2) doc.setFillColor(255, 0, 0);
//      else doc.setFillColor(255, 255, 255);
//      doc.rect(40, (y*((i%mod)+1))-16, 550, 20);
//      if ( ((((i+1)%mod))) == 0) doc.addPage();
    }

//    doc.table(1, 1, data, headers, { autoSize: true });
*/
/*
    let y = 10
    doc.text("Hello world!", 10, y);
    y+=16

    doc.setFontSize(40);
    doc.text("Octonyan loves jsPDF", 35, y);
    y+=40
    for (let i = 0; i < this.articuloList.length; i++) {
      const a:any = this.articuloList[i];
      doc.setFontSize(12);
      doc.text(a.name, 10, y);
      y+=12
    }
    // Set the document to automatically print via JS
//    doc.autoPrint({variant: 'non-conform'});
*/
//    doc.save('autoprint.pdf');
  }
}
