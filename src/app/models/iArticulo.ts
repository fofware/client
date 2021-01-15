export interface iArticulo{
  _id?: any;
  fabricante?: string;
  marca?: string;
  rubro?: string;
  linea?: string;
  p_fabricante: boolean;
  p_marca: boolean;
  p_rubro: boolean;
  p_linea: boolean;
  name?: string;
  image?: string;
  url?: string;
  iva?: number;
  margen?: number;

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

}
