import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data: any = [];

  ngOnInit(): void {
    this.getHome();
  }

  getHome() {
    this.data = [
      {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/lobo_cara_lapiz.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/perro_cartoon.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_cartoon1.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/damayvagabundo.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/tomyjerry_cheff.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/perros/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/gatos/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/perroovejeroaleman.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_parado.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/lobo_gris_cara.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_dibu_ojos_azules.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/perro_asomando.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_asomando.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
    ]
  }
}


/*
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_cachorro_rompiendo_pagina.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/gato_rompiendo_pagina.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/perro_dibujo_manchado_pintura.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/perro_ovejero_aleman_sentado.png"
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Card title"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , image: "../../../assets/images/lobo_gris_cara.png"
        , links: [
          { texto: 'Adultos', link: '/balanceado/adultos' }
          , { texto: 'Cachorros', link: '/balanceado/cachorros' }
        ]
      }
*/