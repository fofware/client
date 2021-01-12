export interface iProveedoresArticulos{
  _id?: Object;
  proveedor?:Object;
  articulo?: Object;
  producto?: Object;
  name?: string;
  codigo?: string;
  stockMinimo: number;
  precioUltimaCompra?: number;
  precioReposicion?: number;
  image?: string;
  ofertas?: [];
}