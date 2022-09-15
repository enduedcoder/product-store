import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export interface ProductPaginationProps {
  activePage: number;
  itemsPerPage: number;
  totalProducts: number;
  onPageNumClick?: (arg: number) => void;
}

export default function ProductPagination({
  activePage,
  itemsPerPage,
  totalProducts,
  onPageNumClick,
}: ProductPaginationProps): JSX.Element {
  const [activePageItem, setActivePageItem] = useState<number>(
    activePage
  );

  const [numOfProducts] = useState<number>(totalProducts);

  const NUM_OF_PAGES = Math.ceil(numOfProducts / itemsPerPage);

  const handlePagination = (pageItem: number) => {
    setActivePageItem(pageItem);
    onPageNumClick(pageItem);
  };

  let pageItems = [];
  for (let pageItem = 1; pageItem <= NUM_OF_PAGES; pageItem++) {
    pageItems.push(
      <Pagination.Item
        key={pageItem}
        active={pageItem === activePageItem}
        onClick={() => handlePagination(pageItem)}
      >
        {pageItem}
      </Pagination.Item>
    );
  }
  return <Pagination>{pageItems}</Pagination>;
}
