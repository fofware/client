import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas-select',
  templateUrl: './personas-select.component.html',
  styleUrls: ['./personas-select.component.css']
})
export class PersonasSelectComponent implements OnInit {

  @Input() selectedPersona: any = {};

  @Output() onSelectPersona = new EventEmitter<object>();

  tpIVA = [
    { value:  1, name: "IVA Responsable Inscripto" },
    { value:  2, name: "IVA Responsable no Inscripto" },
    { value:  3, name: "IVA no Responsable" },
    { value:  4, name: "IVA Sujeto Exento" },
    { value:  5, name: "Consumidor Final" },
    { value:  6, name: "Responsable Monotributo" },
    { value:  7, name: "Sujeto no Categorizado" },
    { value:  8, name: "Proveedor del Exterior" },
    { value:  9, name: "Cliente del Exterior" },
    { value: 10, name: "IVA Liberado – Ley Nº 19.640" },
    { value: 11, name: "IVA Responsable Inscripto – Agente de Percepción" },
    { value: 12, name: "Pequeño Contribuyente Eventual" },
    { value: 13, name: "Monotributista Social" },
    { value: 14, name: "Pequeño Contribuyente Eventual Social"}
  ]
  
  showSelectedInfo: boolean = false;
  showSelectedEdit: boolean = false;
  inputSeletedPersona: boolean = false;

  searchPersona: string = "";
  personaSelected: any = {}
  isPersonaSelected: boolean = false;

  showPersonaList: boolean = true;
  selectedMsg: string = "Asigna Cuenta"

  personasList: any[] = [];

  constructor(private personaService: PersonasService) {
    this.find();
/*
    console.log("personaEnCmp",this.selectedPersona)
    if(this.selectedPersona._id)
      this.personaSelected = this.selectedPersona;
    console.log("personaEnSelect",this.personaSelected)
  */
  }

  ngOnInit(): void {
    this.setMessage();
  }

  async setHeight(){
//    const mainEl = document.getElementById('mainPersonas');
//    const headerEl = document.getElementById('headerPersonas');
//    const browseEl = document.getElementById('browsePersonas');
//    const h = mainEl.parentElement.parentElement.clientHeight-4;
//    const b = h-headerEl.firstElementChild.clientHeight;

//    mainEl.style.height = `${h}px`;
//    browseEl.style.height = `${b}px`;
  }

  onResize(event){
    this.setHeight();
  }
  find(){
    this.personaService.find(this.searchPersona).subscribe( ret => {
      this.personasList = ret;
      console.log(ret)
    },
    error => {
      console.log(error);
    })
  }
  select(persona){
//    const data = JSON.stringify(persona)
//    this.personaSelected = JSON.parse( data );
    this.personaSelected = persona;
    this.isPersonaSelected = true;
    this.setMessage()
    console.log("Select",this.personaSelected)
  }
  changeView(view:number){
    console.log("changeView",view)
  }
  setMessage(){
    let ret = true;
    if(this.personaSelected._id){
      if (!this.selectedPersona._id) {
        this.selectedMsg = "Asigna Persona"
        ret = false;
      } else {
        if(this.personaSelected._id != this.selectedPersona._id){
          this.selectedMsg = "Cambiar Persona"
          ret = false;
        } else {
          this.selectedMsg = "Eliminar Persona"
          ret = false;
        }
      }
    }
    return ret;    
  }
  asigna(){
    console.log(this.selectedMsg)
    if(this.selectedMsg == "Eliminar Persona"){
      this.onSelectPersona.emit({name: "Persona", coeficiente: 1});
      this.personaSelected = {};
      this.isPersonaSelected = false;
     } else
      this.onSelectPersona.emit(this.personaSelected);
    this.setMessage()
  }
  cancelar(){

  }
}