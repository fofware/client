export interface iArticulo{
  _id?: Object;
  name?: string;
  image?: string;
  url?: string;
  iva?: number;
  margen?: number;
  productos?: [{
    _id?:Object;
    articulo?:Object;
    name?:string;
    parentname?:string;
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