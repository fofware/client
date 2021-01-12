import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-drcossia',
  templateUrl: './drcossia.component.html',
  styleUrls: ['./drcossia.component.css']
})
export class DrcossiaComponent implements OnInit {

  constructor(public authService: AuthService) { }

  data: any = [
    {
      rubro: "Alimento Balaceado"
      , linea: "Perros"
      , marca: "Dr. Cossia"
      , name: "Solidario"
      , text: 'La mejor nutrición, a un precio justo'
      , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCosia_AperturaClassic_v1.jpg'
      , color: '#ffffff'
      , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/01_MarcaApertura_Classic_v1.png'
      , model: [
        {
          name: "Solidario"
          , text: 'Alimento completo Balanceado'
          , animal: 'perro'
          , edad: 'adulto'
          , background: ''
          , color: '#000000'
          , image: "https://d26lpennugtm8s.cloudfront.net/stores/035/032/products/824771-mla42106911095_062020-f-b800949cb658f8130f15914805221570-480-0.jpg"
          , precio: [
            {
              name: "Bolsa 15 Kg"
              , text: ''
              , background: ''
              , color: '#000000'
              , image: "https://d26lpennugtm8s.cloudfront.net/stores/035/032/products/824771-mla42106911095_062020-f-b800949cb658f8130f15914805221570-480-0.jpg"
              , barcode: ''
              , medida: ''
              , cantidad: ''
              , precio: 635
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 46
            }
          ]
          , destacable: [
            { title: 'Pelo suave y Brillante', text: 'Gracias a los ácidos grasos Omega 3 & 6 y la vitamina A', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
            , { title: 'Articulaciones protegidas', text: 'Sulfato de Condroitina, Glucosamina. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cArticulaciones_v1.png' }
          ]
          , infoNutricional: [
/*
            { name: 'Proteínas (mínimo)', value: '26%' }
            , { name: 'Grasa (mínimo)', value: '14%' }
            , { name: 'Fibra cruda (máximo)', value: '3%' }
            , { name: 'Minerales totales (máximo)', value: '10%' }
            , { name: 'Calcio (mínimo-máximo)', value: '1.0 / 1.5%' }
            , { name: 'Fósforo (mínimo-máximo)', value: '0.8 / 1.2%' }
            , { name: 'Humedad (máximo)', value: '12%' }
            , { name: 'Energía metabólica', value: '3800 cal/Kg' }
          */
          ]
          , ingredientes: ''
//          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_Sabor_v1.png' }
        }
      ]
    }
    ,{
      name: "Classic"
      , text: 'La mejor nutrición, a un precio justo'
      , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCosia_AperturaClassic_v1.jpg'
      , color: '#ffffff'
      , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/01_MarcaApertura_Classic_v1.png'
      , model: [
        {
          name: "Puppy"
          , animal: 'perro'
          , edad: 'cachorro'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_Fondo_v5.jpg'
          , color: '#ffffff'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_NombreBolsa_v1.png"
          , presentaciones: "Bolsas de 7 y 15 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 1294
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 93
            }
          ]
          , comentario: 'Nutrición balanceada para perros cachorros'
          , destacable: [
            { title: 'Pelo y Piel Saludables', text: 'Vitaminas A y E, Ácido Linoleico, Omega 3 & 6 y Biotina. Favorecen el brillo del pelo y la salud de la piel', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
            , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cArticulaciones_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '26%' }
            , { name: 'Grasa (mínimo)', value: '14%' }
            , { name: 'Fibra cruda (máximo)', value: '3%' }
            , { name: 'Minerales totales (máximo)', value: '10%' }
            , { name: 'Calcio (mínimo-máximo)', value: '1.0 / 1.5%' }
            , { name: 'Fósforo (mínimo-máximo)', value: '0.8 / 1.2%' }
            , { name: 'Humedad (máximo)', value: '12%' }
            , { name: 'Energía metabólica', value: '3800 cal/Kg' }
          ]
          , ingredientes: 'Harina de vísceras de pollo, arroz, maíz, pellets de soja, afrechillo de trigo, grasa de pollo, aceite de pescado, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido fólico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_Sabor_v1.png' }
        }
        , {
          name: "Dog"
          , animal: 'perro'
          , edad: 'adulto'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_Fondo_v5.jpg'
          , color: '#000000'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_NombreBolsa_v3.png"
          , presentaciones: "Bolsas de 3, 7, 15 y 20 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 3 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 20 Kg"
              , precio: 1573
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 85
            }
          ]
          , comentario: 'Nutrición balanceada para perros de actividad normal'
          , destacable: [
            { title: 'Pelo Suave y Brillante', text: 'Gracias a los ácidos grasos Omega 3 & 6 y la Vitamina A', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_cDigestion_v1.png' }
            , { title: 'Articulaciones Protegidas', text: 'Gracias a su aporte de Glucosamina y Sulfato de Condroitina', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_cArticulaciones_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '26%' }
            , { name: 'Proteínas (mínimo)', value: '22%' }
            , { name: 'Grasa (mínimo)', value: '12%' }
            , { name: 'Fibra cruda (máximo)', value: '5%' }
            , { name: 'Minerales totales (máximo)', value: '10%' }
            , { name: 'Calcio (mínimo)', value: '1.7%' }
            , { name: 'Fósforo (mínimo)', value: '1%' }
            , { name: 'Humedad (máximo)', value: '10%' }
            , { name: 'Energía metabólica', value: '3700/3800 cal/Kg' }
          ]
          , ingredientes: 'Harina de vísceras de pollo, arroz, maíz, pellets de soja, afrechillo de trigo, grasa de pollo, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, Bl, B2, B6, B12 y C. Ácido fólico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_Sabor_v2.png' }
        }
        , {
          name: "Cat"
          , animal: 'gato'
          , edad: 'adulto'
          , color: '#ffffff'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_Fondo_v2.jpg'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_NombreBolsa_v1.png"
          , presentaciones: "Bolsas  de 1.5, 7, 20 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 1.5 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 940
            }
            , {
              barcode:''
              ,name: "Bolsa 20 Kg"
              , precio: 2623
            }
            , {
              barcode:''
              ,name: "Fraccionado x Kg"
              , precio: 142
            }
          ]
          , comentario: 'Nutrición balanceada para gatos adultos'
          , destacable: [
            { name: 'Pelo suave y brillante', text: 'Gracias a los ácidos grasos Omega 3 & 6 y la vitamina A', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_cPelo_v1.png' }
            , { name: 'PH balanceado y magnesio controlado', text: 'Ayuda a controlar las vías urinarias', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_cUrinaria_v1.png' }
            , { name: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_cDigestion_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '32%' }
            , { name: 'Grasa (mínimo)', value: '12%' }
            , { name: 'Fibra cruda (máximo)', value: '4%' }
            , { name: 'Minerales totales (máximo)', value: '7%' }
            , { name: 'Calcio (mínimo-máximo)', value: '1.3%' }
            , { name: 'Fósforo (mínimo)', value: '1%' }
            , { name: 'Magnesio (máximo)', value: '0.1%' }
            , { name: 'Sodio (máximo)', value: '0.31%' }
            , { name: 'Humedad (máximo)', value: '12%' }
            , { name: 'Energía metabólica', value: '4300/4400 cal/Kg' }
          ]
          , ingredientes: 'Harina de pescado, aves y vísceras, arroz, maíz, afrechillo de trigo, pellets de soja, grasa de pollo, aceite de pescado, ácido fosfórico, taurina, metionina, lisina. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido nicotínico, pantotenato de calcio, colina, ácido fólico, cloruro de sodio, carbonato de calcio, yodato de calcio, selenito de sodio, carbonato de cobalto y antioxidantes autorizados.'
          , sabor: { name: 'Pescado y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_03_ClassicCat_Sabor_v1.png' }

        }
      ]
    }
    , {
      name: "Premium"
      , text: 'Alto valor protéico para perros de alta actividad'
      , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCosia_AperturaPremium_v2.jpg'
      , color: '#ffffff'
      , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/01_MarcaApertura_Premium_v1.png'
      , model: [
        {
          name: "Puppy"
          , animal: 'perro'
          , edad: 'cachorro'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_Fondo_v2.jpg'
          , color: '#ffffff'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_NombreBolsa_v1.png"
          , presentaciones: "Bolsas de 3, 7 y 15 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 3 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 1638
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 118
            }
          ]
          , comentario: 'Nutrición balanceada para perros cachorros'
          , destacable: [
            { title: 'Alta Proteína 30%', text: 'Favorece el desarrollo de Masa Muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cMusculo_v1.png' }
            , { title: 'Pelo y Piel Saludables', text: 'Vitaminas A y E, Ácido Linoleico, Omega 3 & 6 y Biotina. Favorecen el brillo del pelo y la salud de la piel', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
            , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cArticulaciones_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '30%' }
            , { name: 'Grasa (mínimo)', value: '14%' }
            , { name: 'Fibra cruda (máximo)', value: '3%' }
            , { name: 'Minerales totales (máximo)', value: '8%' }
            , { name: 'Calcio (mínimo-máximo)', value: '1,3 / 1,6%' }
            , { name: 'Fósforo (mínimo-máximo)', value: '1,0 / 1,3%' }
            , { name: 'Humedad (máximo)', value: '12%' }
            , { name: 'Energía metabólica', value: '4150/4250 cal/Kg' }
          ]
          , ingredientes: 'Harina de subproductos de pollo, arroz, huevo en polvo, maíz molido, trigo, gluten meal, levadura de cerveza, pulpa de remolacha, semilla de lino, grasa bovina, aceites vegetales, aceite de pollo, digeridos de aves, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_Sabor_v1.png' }
        }
        , {
          name: "High 28%"
          , animal: 'perro'
          , edad: 'adulto'
          , color: '#ffffff'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_Fondo_v2.jpg'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_NombreBolsa_v2.png"
          , presentaciones: "Bolsas de 3, 7, 15 y 20 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 3 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 20 Kg"
              , precio: 1971
            }
          ]
          , comentario: 'Nutrición balanceada para perros de alta actividad y en todas las etapas de la vida'
          , destacable: [
            { title: 'High Protein 28%', text: 'Favorece el desarrollo de Masa Muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_cMusculo_v1.png' }
            , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_cArticulaciones_v1.png' }
            , { title: 'Pelo Suave y Brillante', text: 'Gracias a los ácidos grasos Omega 3 & 6 y la Vitamina A', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_cDigestion_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '28%' }
            , { name: 'Grasa (mínimo)', value: '12%' }
            , { name: 'Fibra cruda (máximo)', value: '3%' }
            , { name: 'Minerales totales (máximo)', value: '8%' }
            , { name: 'Calcio (mínimo)', value: '1.3%' }
            , { name: 'Fósforo (mínimo)', value: '1%' }
            , { name: 'Humedad (máximo)', value: '12%' }
            , { name: 'Ácido linoleico', value: '1.6%' }
            , { name: 'Energía metabólica', value: '4100/4300 cal/Kg' }
          ]
          , ingredientes: 'Harina de subproductos de pollo, arroz, maíz molido, trigo, gluten meal, levadura de cerveza, pulpa de remolacha, semilla de lino, grasa bovina, aceites vegetales, aceite de pollo, digeridos de aves, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Acido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_04_PremiumAdulto_Sabor_v1.png' }
        }
      ]
    }
    , {
      name: "Super Premium"
      , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCosia_AperturaSuperPremium_v2.jpg'
      , color: '#ffffff'
      , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/01_MarcaApertura_SuperPremium_v2.png'
      , text: 'Nutrición de excelencia para mascotas excelentes'
      , model: [
        {
          name: "Puppy"
          , animal: 'perro'
          , edad: 'cachorro'
          , color: '#000000'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_09_SuperPremiumPuppy_Fondo_v2.jpg'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_09_SuperPremiumPuppy_NombreBolsa_v1.png"
          , comentario: 'Nutrición balanceada para perros en período de desarrollo, lactancia y gestación'
          , ingredientes: 'Harina de subproductos de pollo, huevo en polvo, arroz, maíz molido, trigo, glúten meal, levadura de cerveza, pulpa de remolacha, semilla de lino, grasa bovina, aceites vegetales, aceite de pescado, aceite de pollo, digeridos de aves, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_Sabor_v1.png' }
          , presentaciones: "Bolsas de 1.5, 7 y 15 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 1.5 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 20 Kg"
              , precio: 2385
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 129
            }
          ]
          , destacable: [
            { title: 'Huevo en Polvo', text: 'Proteína de muy alto valor biológico. Regenera tejido muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_09_SuperPremiumPuppy_cMusculo_v1.png' }
            , { title: 'Articulaciones protegidas', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_09_SuperPremiumPuppy_cArticulaciones_v1.png' }
            , { title: 'DMF', text: 'DHA, MOS, FOS, Vitaminas E y C. Refuerzan las defensas naturales (Anticuerpos)', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_09_SuperPremiumPuppy_cCerebro_v1.png' }
            , { title: 'Pelo y Piel Saludables', text: 'Vitaminas A y E, Ácido Linoleico, Omega 3 & 6 y Biotina. Favorecen el brillo del pelo y la salud de la piel', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cPelo_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '30%' }
            , { name: 'Grasa (mínimo)', value: '16%' }
            , { name: 'Fibra cruda (máximo)', value: '2.5%' }
            , { name: 'Minerales totales (máximo)', value: '7%' }
            , { name: 'Calcio (mínimo-máximo)', value: '1.25 / 1.7%' }
            , { name: 'Fósforo (mínimo-máximo)', value: '0.9 / 1.3%' }
            , { name: 'Humedad (máximo)', value: '10%' }
            , { name: 'Energía metabólica', value: '4200/4400 cal/Kg' }
          ]
        }
        , {
          name: "Adultos"
          , animal: 'perro'
          , edad: 'adulto'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_Fondo_v2.jpg'
          , color: '#ffffff'
          , image: "http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_NombreBolsa_v1.png"
          , comentario: 'Nutrición balanceada para perros de alta actividad'
          , ingredientes: 'Harina de subproductos de pollo, huevo en polvo, arroz, maíz molido, trigo, gluten meal, levadura de cerveza, pulpa de remolacha, semilla de lino, grasa bovina, aceites vegetales, aceite de pescado, aceite de pollo, digeridos de aves, metionina, lisina, taurina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Acido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_Sabor_v1.png' }
          , presentaciones: "Bolsas de 3, 7, 15 y 20 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 3 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 20 Kg"
              , precio: 0
            }
          ]
          , destacable: [
            { title: 'Huevo en Polvo', text: 'Proteína de muy alto valor biológico. Regenera tejido muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_cMusculo_v1.png' }
            , { title: 'Oil Mix', text: 'Omega 3, 6 & 9, EPA-DHA, Ácido Linoleico. Favorece el brillo del pelo y la salud de la piel.', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_cPelo_v1.png' }
            , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Ayuda a estimular la regeneración y disminuir la degeneración del cartílago articular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_08_SuperPremiumAdultos_cArticulaciones_v1.png' }
            , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_01_ClassicDog_cDigestion_v1.png' }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '26%' }
            , { name: 'Grasa (mínimo)', value: '16%' }
            , { name: 'Fibra cruda (máximo)', value: '3%' }
            , { name: 'Minerales totales (máximo)', value: '7%' }
            , { name: 'Calcio (mínimo)', value: '1.25%' }
            , { name: 'Fósforo (mínimo)', value: '0.85%' }
            , { name: 'Humedad (máximo)', value: '10%' }
            , { name: 'Ácido linoleico', value: '1.6%' }
            , { name: 'Energía metabólica', value: '4100/4300 cal/Kg' }
          ]
        }
        ,{
          name: "Adultos Light"
          , animal: 'perro'
          , edad: 'adulto'
          , color: '#ffffff'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_Fondo_v2.jpg'
          , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_NombreBolsa_v1.png'
          , comentario: 'Nutrición balanceada para perros con sobrepeso.'
          , ingredientes: 'Harina de subproductos de pollo, huevo en polvo, arroz, maíz molido, gluten meal, levadura de cerveza, pulpa de remolacha, semilla de lino, grasa de pollo, aceite de pescado, aceites vegetales, digeridos de aves, metionina, lisina, treonina, fosfato monodicálcico, cloruro de sodio. Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes autorizados.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_Sabor_v1.png' }
          , presentaciones: "Bolsas de 3, 7, y 15 Kilogramos"
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 3 Kg"
              , empaque: 'Bolsa'
              , unidades: 3
              , medida: 'Kg'
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 0
            }
            , {
              barcode: ''
              , name: "Bolsa 15 Kg"
              , precio: 1876
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 135
            }
          ]
          , destacable: [
            { image:'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_cMusculo_v1.png'
              , title: 'Huevo en Polvo'
              , text: 'Proteína de muy alto valor biológico. Regenera tejido muscular.'
            }
            , {
              image:'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_cDigestion_v1.png'
              , title:'Alta Fibra Prebiótica'
              , text:'Favorece el tracto digestivo'
            }
            , {
              image:'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_07_SuperPremiumLight_cArticulaciones_v1.png'
              , title:'Articulaciones más Saludables'
              , text:'Sulfato de Condroitina, Glucosamina y Manganeso. Ayuda a estimular la regeneración y disminuir la degeneración del cartílago articular.'
            }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '26%' }
            , { name: 'Grasa (mínimo)', value: '7%' }
            , { name: 'Fibra cruda (máximo)', value: '18%' }
            , { name: 'Minerales totales (máximo)', value: '7%' }
            , { name: 'Calcio (mínimo)', value: '0.4%' }
            , { name: 'Fósforo (mínimo)', value: '0.4' }
            , { name: 'Humedad (máximo)', value: '10%' }
            , { name: 'Energía metabólica', value: '2800 cal/Kg' }
          ]
        }
        , {
          name: "Cat"
          , animal: 'gato'
          , edad: 'all'
          , background: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_Fondo_v2.jpg'
          , color: '#ffffff'
          , image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_NombreBolsa_v1.png'
          , presentaciones: "Bolsas  de 1, 8 y 15 Kilogramos"
          , comentario: 'Nutrición balanceada para gatos en todas las etapas de vida'
          , ingredientes: 'Harina de subproductos de pollo, huevo en polvo, arroz, maíz molido, trigo, gluten meal, pulpa de remolacha, semilla de lino, grasa bovina, aceites vegetales, aceite de pescado, digeridos de aves, metionina, lisina, taurina, treonina, fosfato monodicálcico, cloruro de sodio, Vitaminas: A, D3, E, K, B1, B2, B6, B12 y C. Ácido fólico, ácido nicotínico, pantotenato de calcio, cloruro de colina, biotina, óxido de manganeso, óxido de zinc, sulfato ferroso, óxido de cobre, yodato de calcio, selenito de sodio, carbonato de calcio, zeolitas y antioxidantes permitidos.'
          , sabor: { name: 'Pollo y Arroz', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_Sabor_v1.png' }
          , precio: [
            {
              barcode: ''
              , name: "Bolsa 1.5 Kg"
              , precio: 0.00
            }
            , {
              barcode: ''
              , name: "Bolsa 7 Kg"
              , precio: 1377.00
            }
            , {
              barcode: ''
              , name: "Bolsa 20 Kg"
              , precio: 0.00
            }
            , {
              barcode: ''
              , name: "Fraccionado x Kg"
              , precio: 212
            }
          ]
          , destacable: [
            { 
              image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_cMusculo_v1.png'
              ,name: 'Huevo en Polvo'
              ,text: 'Mejora masa muscular sin presencia de grasa.'
            }
            ,{
              image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_cUrinaria_v1.png'
              ,name: 'PH balanceado y Magnesio controlado'
              ,text: 'Ayuda a controlar las vías urinarias.'
            }
            ,{
              image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_06_SuperPremiumCat_cPelo_v1.png'
              ,name: 'Oil Mix'
              ,text:'Omega 3, 6 & 9, EPA-DHA, Ácido linoleico. Favorece el brillo del pelo y la salud de la piel.'
            }
          ]
          , infoNutricional: [
            { name: 'Proteínas (mínimo)', value: '32%' }
            , { name: 'Grasa (mínimo)', value: '17%' }
            , { name: 'Fibra cruda (máximo)', value: '2%' }
            , { name: 'Minerales totales (máximo)', value: '7%' }
            , { name: 'Calcio (mínimo)', value: '0.9%' }
            , { name: 'Fósforo (mínimo)', value: '0.8%' }
            , { name: 'Magnesio (máximo)', value: '0.1%' }
            , { name: 'Sodio (máximo)', value: '0.35%' }
            , { name: 'Humedad (máximo)', value: '10%' }
            , { name: 'Energía metabólica', value: '4400/4500 cal/Kg' }
          ]
        }


      ]
    }
  ];
  prodList: any = [];

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.data.forEach( (e) =>{
      e.model.forEach(m => {
        this.prodList.push(m);
      });
    });
  }

}


/*
      , {
        name: "Marca Articulo"
        , color: '#ffffff'
        , background: ''
        , image: ''
        , text: ''
        , model: [
          {
            name: "Nombre Articulo"
            , animal: 'perro'
            , edad: 'cachorro'
            , color: '#ffffff'
            , background: ''
            , image: ""
            , comentario: ''
            , ingredientes: ''
            , sabor: { name: '', image: '' }
            , presentaciones: "Bolsas de 1.5, 3, 7, 15 y 20 Kilogramos"
            , precio: [
              {
                name: "Bolsa 1.5 Kg"
                , precio: 400
              }
              , {
                name: "Bolsa 3 Kg"
                , precio: 700
              }
              , {
                name: "Bolsa 7 Kg"
                , precio: 700
              }
              , {
                name: "Bolsa 15 Kg"
                , precio: 1500
              }
              , {
                name: "Bolsa 20 Kg"
                , precio: 1500
              }
            ]
            , destacable: [
              { title: 'Alta Proteína 30%', text: 'Favorece el desarrollo de Masa Muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cMusculo_v1.png' }
              , { title: 'Pelo y Piel Saludables', text: 'Vitaminas A y E, Ácido Linoleico, Omega 3 & 6 y Biotina. Favorecen el brillo del pelo y la salud de la piel', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cPelo_v1.png' }
              , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
              , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cArticulaciones_v1.png' }
            ]
            , infoNutricional: [
              { name: 'Proteínas (mínimo)', value: '30%' }
              , { name: 'Grasa (mínimo)', value: '14%' }
              , { name: 'Fibra cruda (máximo)', value: '3%' }
              , { name: 'Minerales totales (máximo)', value: '8%' }
              , { name: 'Calcio (mínimo-máximo)', value: '1,3 / 1,6%' }
              , { name: 'Fósforo (mínimo-máximo)', value: '1,0 / 1,3%' }
              , { name: 'Humedad (máximo)', value: '12%' }
              , { name: 'Energía metabólica', value: '4150/4250 cal/Kg' }
            ]
          }
          ,{
            name: "Nombre Articulo"
            , animal: 'perro'
            , edad: 'cachorro'
            , color: '#ffffff'
            , background: ''
            , image: ""
            , comentario: ''
            , ingredientes: ''
            , sabor: { name: '', image: '' }
            , presentaciones: "Bolsas de 1.5, 3, 7, 15 y 20 Kilogramos"
            , precio: [
              {
                name: "Bolsa 1.5 Kg"
                , precio: 400
              }
              , {
                name: "Bolsa 3 Kg"
                , precio: 700
              }
              , {
                name: "Bolsa 7 Kg"
                , precio: 700
              }
              , {
                name: "Bolsa 15 Kg"
                , precio: 1500
              }
              , {
                name: "Bolsa 20 Kg"
                , precio: 1500
              }
            ]
            , destacable: [
              { title: 'Alta Proteína 30%', text: 'Favorece el desarrollo de Masa Muscular', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cMusculo_v1.png' }
              , { title: 'Pelo y Piel Saludables', text: 'Vitaminas A y E, Ácido Linoleico, Omega 3 & 6 y Biotina. Favorecen el brillo del pelo y la salud de la piel', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cPelo_v1.png' }
              , { title: 'Alta Digestibilidad', text: 'Elaborado con ingredientes de alta calidad que facilitan una óptima digestión', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_02_ClassicPuppy_cDigestion_v1.png' }
              , { title: 'Articulaciones más Saludables', text: 'Sulfato de Condroitina, Glucosamina y Manganeso. Estos componentes en la nutrición ayudan a evitar problemas de las articulaciones en el crecimiento', image: 'http://drcossia.com.ar/wp-content/uploads/2018/10/DrCossia_05_PremiumPuppy_cArticulaciones_v1.png' }
            ]
            , infoNutricional: [
              { name: 'Proteínas (mínimo)', value: '30%' }
              , { name: 'Grasa (mínimo)', value: '14%' }
              , { name: 'Fibra cruda (máximo)', value: '3%' }
              , { name: 'Minerales totales (máximo)', value: '8%' }
              , { name: 'Calcio (mínimo-máximo)', value: '1,3 / 1,6%' }
              , { name: 'Fósforo (mínimo-máximo)', value: '1,0 / 1,3%' }
              , { name: 'Humedad (máximo)', value: '12%' }
              , { name: 'Energía metabólica', value: '4150/4250 cal/Kg' }
            ]
          }
        ]
      }
*/
