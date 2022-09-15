import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { PRODUCTS } from '../../graphql';
import { ProductCard, Spinner } from '../../components';
import { SortItemsType } from '../../utils';

export interface ProductsListProps {
  searchTerm: string;
  pageNumber: number;
  sortDetails: SortItemsType;
  onItemsCountChange?: (arg: number) => void;
}

export default function ProductsList({
  searchTerm,
  pageNumber,
  sortDetails,
  onItemsCountChange,
}: ProductsListProps): JSX.Element {
  const {
    data: allData,
    error: allDataError,
    loading: allDataLoading,
  } = useQuery(PRODUCTS, {
    variables: {
      filters: searchTerm,
      pageNumber: pageNumber,
      limit: 10,
      sortField: sortDetails.sortField,
      sortOrder: sortDetails.sortOrder,
    },
  });

  useEffect(() => {
    onItemsCountChange(allData?.products.count);
  }, [allData?.products.count]);

  if (allDataLoading) return <Spinner />;

  if (allDataError)
    return <p>Unable to display product list. Try again later</p>;

  return (
    <>
      {allData?.products.items ? (
        <div className="row mt-4 d-flex justify-content-center">
          {allData.products.items.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <p>No products to display</p>
      )}
    </>
  );
}
