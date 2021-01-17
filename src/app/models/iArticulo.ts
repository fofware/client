export interface iArticulo {
  _id?: any;
  fabricante: string;
  marca: string;
  rubro: string;
  linea: string;
  d_fabricante: boolean;
  d_marca: boolean;
  d_rubro: boolean;
  d_linea: boolean;
  name?: string;
  image?: string;
  url?: string;
  iva?: number;
  margen?: number;
/*
  productos?: [{
    _id?: any;
    articulo?: any;
    name?: string;
    parentname?: string;
    contiene: number;
    unidad: string;
    precio: number;
    pesable: boolean;
    codigo: string;
    plu: number;
    image: string;
    stock: number;
    stockMin: number;
    iva: number;
    margen: number;
  }];
*/
}
