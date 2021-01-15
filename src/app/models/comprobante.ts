import { API_URI, decimales, round } from '../common/utils';
import { itemComprobante } from './comprobanteItem';
import { iPersona } from './iPersonas';

// mi cbu CAJA Ahorro ICBC 0150517701000141528219
// Cta Caja Ahorro ICBC 0517/01141528/21
const receptor = [{ 0: 'si es A es RI' },
{ 1: 'si es B es CF o M' },
{ 2: 'si es C y otros no va' }
];
const tipoCmp = [
  {
    codigo: '001', nombre: 'FACTURAS A',
    emisor: 0,
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '002', nombre: 'NOTAS DE DEBITO A',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '003', nombre: 'NOTAS DE CREDITO A',
    Receptor: 0, operacion: '-'
  }
  , {
    codigo: '004', nombre: 'RECIBOS A',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '005', nombre: 'NOTAS DE VENTA AL CONTADO A',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '006', nombre: 'FACTURAS B',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '007', nombre: 'NOTAS DE DEBITO B',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '008', nombre: 'NOTAS DE CREDITO B',
    Receptor: 1, operacion: '-'
  }
  , {
    codigo: '009', nombre: 'RECIBOS B RECIBOS B',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '011', nombre: 'FACTURAS C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '012', nombre: 'NOTAS DE DEBITO C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '013', nombre: 'NOTAS DE CREDITO C',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '015', nombre: 'RECIBOS C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '016', nombre: 'NOTAS DE VENTA AL CONTADO C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '017', nombre: 'LIQUIDACION DE SERVICIOS PUBLICOS CLASE A',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '018', nombre: 'LIQUIDACION DE SERVICIOS PUBLICOS CLASE B',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '019', nombre: 'FACTURAS DE EXPORTACION',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '020', nombre: 'NOTAS DE DEBITO POR OPERACIONES CON EL EXTERIOR',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '021', nombre: 'NOTAS DE CREDITO POR OPERACIONES CON EL EXTERIOR',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '022', nombre: 'FACTURAS - PERMISO EXPORTACION SIMPLIFICADO - DTO. 855/97',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '023', nombre: 'COMPROBANTES “A” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '024', nombre: 'COMPROBANTES “A” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '025', nombre: 'COMPROBANTES “B” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '026', nombre: 'COMPROBANTES “B” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '027', nombre: 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '028', nombre: 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '029', nombre: 'LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '030', nombre: 'COMPROBANTES DE COMPRA DE BIENES USADOS',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '031', nombre: 'MANDATO - CONSIGNACION',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '032', nombre: 'COMPROBANTES PARA RECICLAR MATERIALES',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '033', nombre: 'LIQUIDACION PRIMARIA DE GRANOS',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '034', nombre: 'COMPROBANTES A DEL APARTADO A INCISO F) R.G. N° 1415',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '035', nombre: 'COMPROBANTES B DEL ANEXO I, APARTADO A, INC. F), R.G. N° 1415',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '036', nombre: 'COMPROBANTES C DEL Anexo I, Apartado A, INC.F), R.G. N° 1415',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '037', nombre: 'NOTAS DE DEBITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '038', nombre: 'NOTAS DE CREDITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415',
    Receptor: 0, operacion: '-'
  }
  , {
    codigo: '039', nombre: 'OTROS COMPROBANTES A QUE CUMPLEN CON LA R G 1415',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '040', nombre: 'OTROS COMPROBANTES B QUE CUMPLAN CON LA R.G. N° 1415',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '041', nombre: 'OTROS COMPROBANTES C QUE CUMPLAN CON LA R.G. N° 1415',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '043', nombre: 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '044', nombre: 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '045', nombre: 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '046', nombre: 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '047', nombre: 'NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '048', nombre: 'NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '050', nombre: 'RECIBO FACTURA A REGIMEN DE FACTURA DE CREDITO',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '049', nombre: 'COMPROBANTES DE COMPRA DE BIENES NO REGISTRABLES A CONSUMIDORES FINALES',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '051', nombre: 'FACTURAS M',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '052', nombre: 'NOTAS DE DEBITO M',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '053', nombre: 'NOTAS DE CREDITO M',
    Receptor: 0, operacion: '-'
  }
  , {
    codigo: '054', nombre: 'RECIBOS M',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '055', nombre: 'NOTAS DE VENTA AL CONTADO M',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '057', nombre: 'OTROS COMPROBANTES M QUE CUMPLAN CON LA R.G. N° 1415',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '058', nombre: 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO M',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '059', nombre: 'LIQUIDACIONES M',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '060', nombre: 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO A',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '061', nombre: 'CUENTAS DE VENTA Y LIQUIDO PRODUCTO B',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '063', nombre: 'LIQUIDACIONES A',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '064', nombre: 'LIQUIDACIONES B',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '066', nombre: 'DESPACHO DE IMPORTACION',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '068', nombre: 'LIQUIDACION C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '070', nombre: 'RECIBOS FACTURA DE CREDITO',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '080', nombre: 'INFORME DIARIO DE CIERRE (ZETA) - CONTROLADORES FISCALES',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '081', nombre: 'TIQUE FACTURA A',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '082', nombre: 'TIQUE FACTURA B',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '083', nombre: 'TIQUE',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '088', nombre: 'REMITO ELECTRONICO',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '089', nombre: 'RESUMEN DE DATOS',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '090', nombre: 'OTROS COMPROBANTES - DOCUMENTOS EXCEPTUADOS - NOTAS DE CREDITO',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '091', nombre: 'REMITOS R',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '099', nombre: 'OTROS COMPROBANTES QUE NO CUMPLEN O ESTÁN EXCEPTUADOS DE LA R.G. 1415 Y SUS MODIF',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '110', nombre: 'TIQUE NOTA DE CREDITO',
    Receptor: 1, operacion: '-'
  }
  , {
    codigo: '111', nombre: 'TIQUE FACTURA C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '112', nombre: 'TIQUE NOTA DE CREDITO A',
    Receptor: 0, operacion: '-'
  }
  , {
    codigo: '113', nombre: 'TIQUE NOTA DE CREDITO B',
    Receptor: 1, operacion: '-'
  }
  , {
    codigo: '114', nombre: 'TIQUE NOTA DE CREDITO C',
    Receptor: 2, operacion: '-'
  }
  , {
    codigo: '115', nombre: 'TIQUE NOTA DE DEBITO A',
    Receptor: 0, operacion: '+'
  }
  , {
    codigo: '116', nombre: 'TIQUE NOTA DE DEBITO B',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '117', nombre: 'TIQUE NOTA DE DEBITO C',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '118', nombre: 'TIQUE FACTURA M',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '119', nombre: 'TIQUE NOTA DE CREDITO M',
    Receptor: 1, operacion: '-'
  }
  , {
    codigo: '120', nombre: 'TIQUE NOTA DE DEBITO M',
    Receptor: 1, operacion: '+'
  }
  , {
    codigo: '331', nombre: 'LIQUIDACION SECUNDARIA DE GRANOS',
    Receptor: 2, operacion: '+'
  }
  , {
    codigo: '332', nombre: 'CERTIFICACION ELECTRONICA (GRANOS)',
    Receptor: 2, operacion: '+'
  }
];
const empresa = {
  name: 'Firulais',
  fullname: 'Firulais Tienda de Mascotas',
  direccion: 'Av. 25 de Mayo 372'

};

export class Comprobante {
  data: {
    fecha: string;
    hora: number;
    persona: iPersona;
    tipo: string; // de_compra / de_venta
    operacion: string; // contado, cta-cte, credito, suscripción?
    pagoTipo: number;
    ca_pago: any;
    listaTipo: number;
    ca_lista: any;
    sucursal: number;
    numero: number;
    cae: string;
    items: itemComprobante[];
    sumaAjustes: number;
    sumaCompra: number;
    sumaReposicion: number;
    sumaNeto: number;   // subTotal sin ivas
    ivas: [];
    sumaIva: number;
    sumaBruto: number;  // subTotal con ivas
    retenciones: [];
    percepsiones: [];
    sumaRetenciones: number;
    sumaPercepciones: number;
    sumaTotal: number;
    bultos: number;
  } = {
      fecha: '',
      hora: 0,
      persona: { name: 'Persona', coeficiente: 1 },
      tipo: '', // de_compra / de_venta
      operacion: '', // contado, cta-cte, credito, suscripción?
      pagoTipo: 2,
      ca_pago: { name: 'Débito', value: 1 },
      listaTipo: 2,
      ca_lista: { name: 'Cliente', basePrecio: 'precio', value: 1 },
      sucursal: 0,
      numero: 0,
      cae: '',
      items: [],
      sumaAjustes: 0,
      sumaCompra: 0,
      sumaReposicion: 0,
      sumaNeto: 0,   // subTotal sin ivas
      ivas: [],
      sumaIva: 0,
      sumaBruto: 0,  // subTotal con ivas
      retenciones: [],
      percepsiones: [],
      sumaRetenciones: 0,
      sumaPercepciones: 0,
      sumaTotal: 0,
      bultos: 0
    };
  sumaPagos = 0;
  sumaCobro = 0;
  saldo = 0;
  pagos: any = [];

  ApiUri = API_URI;

  constructor() {
  }
  setTipo(tipo: string) {
    this.data.tipo = tipo.toLowerCase();
    this.storageRead();
    this.calcula();
  }
  init(){
    this.data = {
      fecha: '',
      hora: 0,
      persona: { name: 'Persona', coeficiente: 1 },
      tipo: '', // de_compra / de_venta
      operacion: '', // contado, cta-cte, credito, suscripción?
      pagoTipo: 2,
      ca_pago: { name: 'Débito', value: 1 },
      listaTipo: 2,
      ca_lista: { name: 'Cliente', basePrecio: 'precio', value: 1 },
      sucursal: 0,
      numero: 0,
      cae: '',
      items: [],
      sumaAjustes: 0,
      sumaCompra: 0,
      sumaReposicion: 0,
      sumaNeto: 0,   // subTotal sin ivas
      ivas: [],
      sumaIva: 0,
      sumaBruto: 0,  // subTotal con ivas
      retenciones: [],
      percepsiones: [],
      sumaRetenciones: 0,
      sumaPercepciones: 0,
      sumaTotal: 0,
      bultos: 0
    };
    this.sumaPagos = 0;
    this.sumaCobro = 0;
    this.saldo = 0;
    this.pagos = [];
  }
  storageRead(){
    let data: any = localStorage.getItem(`comprobante_${this.data.tipo}`);
    if (data !== null){
      this.data = JSON.parse( data );
      const array = JSON.parse(JSON.stringify(this.data.items));
      this.data.items = [];
      for (let i = 0; i < array.length; i++) {
        const e = array[i].data;
        console.log(e);
        this.add(e.producto);
        const item = this.data.items[i];
        for (const key in array[i]){
          if (Object.prototype.hasOwnProperty.call(array[i], key)) {
            item[key] = array[i][key];
          }
        }
        for (const key in e) {
          if (Object.prototype.hasOwnProperty.call(e, key)) {
            const element = e[key];
            item[key] = element;
          }
        }
/*
        item.setAjusteCliente(this.data.persona.coeficiente);
        item.ajuste_persona();
        item.setAjustePago(this.data.ca_pago);
        item.ajuste_pago();
        item.calculaTotales();
      */
      }
    }
    else{
      data = {
        fecha: '',
        hora: 0,
        persona: { name: 'Persona', coeficiente: 1 },
        tipo: '', // de_compra / de_venta
        operacion: '', // contado, cta-cte, credito, suscripción?
        pagoTipo: 2,
        ca_pago: { name: 'Débito', value: 1 },
        listaTipo: 2,
        ca_lista: { name: 'Cliente', basePrecio: 'precio', value: 1 },
        sucursal: 0,
        numero: 0,
        cae: '',
        items: [],
        sumaAjustes: 0,
        sumaNeto: 0,   // subTotal sin ivas
        ivas: [],
        sumaIva: 0,
        sumaBruto: 0,  // subTotal con ivas
        retenciones: [],
        percepsiones: [],
        sumaRetenciones: 0,
        sumaPercepciones: 0,
        sumaTotal: 0,
        bultos: 0
      };
      this.sumaPagos = 0;
      this.sumaCobro = 0;
      this.saldo = 0;
      this.pagos = [];
    }
    this.calcula();
    return this.data;
  }

  add(producto: any) {
    if (this.find(producto) === false) {
      const newItem = new itemComprobante(producto);
      newItem.setAjusteCliente(this.data.persona.coeficiente);
      newItem.setAjustePago(this.data.ca_pago);
      newItem.calcula();
      if (newItem.data.producto.pesable) {
        newItem.valores.importe = newItem.data.rPrecio;
        newItem.data.cantidad = 1;
        newItem.calcula();
      }
      this.data.items.push(newItem);
    }
    this.calcula();
  }
  deleteItem(idx) {
    this.data.items.splice(idx, 1);
  }
  find(producto) {
    if (producto.pesable === true) { return false; }
    const array = this.data.items;
    for (let i = 0; i < array.length; i++) {
      const el: itemComprobante = array[i];
      if (el.data.productoId === producto._id) {
        el.data.cantidad++;
        el.calcula();
        return true;
      }
    }
    return false;
  }
  calcula() {
    const array = this.data.items;
    this.data.sumaNeto = 0;
    this.data.sumaBruto = 0;
    this.data.sumaIva = 0;
    this.data.sumaPercepciones = 0;
    this.data.sumaRetenciones = 0;
    this.data.sumaTotal = 0;
    this.data.sumaCompra = 0;
    this.data.sumaReposicion = 0;
    this.data.bultos = 0;
    this.data.sumaAjustes = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < array.length; i++) {
      const el: any = array[i];
      this.data.sumaNeto += round(el.data.sumaNeto, decimales);
      this.data.sumaIva += round(el.data.sumaIva, decimales);
      this.data.sumaBruto += round(el.data.sumaBruto, decimales);
      this.data.sumaCompra += round(el.data.sumaCompra, decimales);
      this.data.sumaReposicion += round(el.data.sumaReposicion, decimales);
      this.data.sumaPercepciones += round(el.data.sumaPercepciones, decimales);
      this.data.sumaRetenciones += round(el.data.sumaRetenciones, decimales);
      this.data.sumaAjustes += round(el.data.sumaAjuste, decimales);
      if (el.data.producto.pesable === true) { this.data.bultos++; }
      else { this.data.bultos += el.data.cantidad; }
    }
    this.data.sumaTotal = round(this.data.sumaBruto
      + this.data.sumaRetenciones
      + this.data.sumaPercepciones, decimales);
    this.sumaCobro = round(this.data.sumaTotal, 0);
    this.storageUpdate();
  }
  storageUpdate(){
    localStorage.setItem(`comprobante_${this.data.tipo}`, JSON.stringify(this.data));
  }
  storageDelete(){
    localStorage.removeItem(`comprobante_${this.data.tipo}`);
  }
  setPago() {
    const array = this.data.items;
/*
    for (const el of array) {
      const precio = el.data.rPrecio;
      el.setAjustePago(this.data.ca_pago);
      el.ajuste_pago();
      if (el.data.producto.pesable === true) {
        el.valores.importe = round((el.data.rPrecio * el.data.cantidad), decimales);
      }
      el.calculaTotales();
    }
*/
    for (let i = 0; i < array.length; i++) {
      const el: itemComprobante = array[i];
      const precio = el.data.rPrecio;
      el.setAjustePago(this.data.ca_pago);
      el.ajuste_pago();
      if (el.data.producto.pesable === true) {
        el.valores.importe = round((el.data.rPrecio * el.data.cantidad), decimales);
      }
      el.calculaTotales();
    }
    this.calcula();
  }
  setLista() {
    const array = this.data.items;
    for (let i = 0; i < array.length; i++) {
      const el: itemComprobante = array[i];
      const precio = el.data.rPrecio;
      el.setAjusteLista(this.data.ca_lista);
      el.ajuste_pago();
      if (el.data.producto.pesable === true) {
        el.valores.importe = round((el.data.rPrecio * el.data.cantidad), decimales);
      }
      el.calculaTotales();
    }
    this.calcula();
  }
  setClient() {
    const array = this.data.items;
    for (let i = 0; i < array.length; i++) {
      const el: itemComprobante = array[i];
      const precio = el.data.rPrecio;
      el.setAjusteCliente(this.data.persona.coeficiente);
      el.ajuste_persona();
      if (el.data.producto.pesable === true) {
        el.valores.importe = round((el.data.rPrecio * el.data.cantidad), decimales);
      }
      el.calculaTotales();
    }
    this.calcula();
  }
  sumarPagos() {
    const array = this.pagos;
    this.saldo = this.sumaCobro;
    this.sumaPagos = 0;
    const i = 0;
    for (let i = 0; i < array.length; i++) {
      array[i].saldo = this.saldo;
      const valor = parseFloat(array[i].value);
      this.saldo -= valor;
      this.sumaPagos += this.saldo >= 0 ? valor : valor + this.saldo;
      array[i].vuelto = this.saldo < 0 ? this.saldo * -1 : 0;
    }
  }
  addPago(pago) {
    this.pagos.push(pago);
    this.sumarPagos();
    console.log(this.pagos);
  }
  deletePago(idx) {
    console.log(this.pagos);
    console.log(idx, this.pagos[idx]);
    this.pagos.splice(idx, 1);
  }
  isAccount() {
    if (this.data.persona._id) { return true; }
    return false;
  }
}
