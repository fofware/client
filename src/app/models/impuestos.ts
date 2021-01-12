const empresa = {
  fullName: 'Firulais Tienda de Mascotas',
  name: 'Firulais',
  direccion: 'Av. 25 de Mayo 374',
  codpos: '3500',
  localidad: 'Resistencia',
  provincia: 'Chaco',
  pais: 'Argentina',
  cuit: '20-16119274-1',
  tpiva: 6
}

const tpIVA = [
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

const comprobantes = [
  {
    iva: 1
  },
  {
    iva: 2
  },
  {
    iva: 3
  },
  {
    iva: 4
  },
  {
    iva: 5
  },
  {
    iva: 6
  },
  {
    iva: 7
  },
  {
    iva: 8
  },
  {
    iva: 9
  },
  { name: 'Factura', letra: ['A','B',]}
]
export class Impuestos {

}

export class iva{
  emisor: number = 6;
  receptor: number = 5;
  comprobante
  constructor(ivaEmisor, ivaReceptor){

  }
}