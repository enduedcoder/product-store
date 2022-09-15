export type Values<T> = T[keyof T];

export interface ProductPriceDetailType {
  price: String;
  id: String;
  productId: String;
}

export interface ProductType {
  title: string;
  image: string;
  material: string;
  color: string;
  description: string;
  release_date: string;
  id: string;
  priceDetails: ProductPriceDetailType;
}

export interface SortItemsType {
  code?: string;
  sortField: string;
  sortOrder: SortOrderTypeValue;
}

export const SortOrderType = {
  ASC: 'asc',
  DESC: 'desc',
};

export type SortOrderTypeValue = Values<typeof SortOrderType>;
