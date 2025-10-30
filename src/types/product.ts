export interface ProductItem {
  codigo: string;
  descricao: string;
  setor: string;
}

export interface Product {
  productCode: string;
  productDescription: string;
  items: ProductItem[];
}

export interface ParsedCatalog {
  products: Product[];
  totalItems: number;
}
