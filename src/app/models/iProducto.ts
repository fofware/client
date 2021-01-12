export interface iProducto{
  _id?: Object;
  articulo?: Object;
  parent?: Object;
  name?: string;
  contiene?: number;
  unidad?: string;
  precio?: number;
  compra?: number;
  reposicion?:number;

  servicio?: boolean;
  pesable?: boolean;
  pVenta?: boolean;
  pCompra?: boolean;


  codigo?: string;
  plu?: number;
  image?: string;
  parentname?: string;
  changed?: boolean;
  infile?: boolean;
  stock?:number;
  stockMin?:number;
  margen?:number;
  iva?:number;
}