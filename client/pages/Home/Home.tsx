import React, { useState } from 'react';
import {
  ProductsList,
  Search,
  ProductPagination,
  SortProducts,
} from '../../components';
import { SortItemsType } from '../../utils';
import { sortByData } from '../../data';

const ITEMS_PER_PAGE = 10;
const INITIAL_ACTIVE_PAGE = 1;

export default function Home(): JSX.Element {
  const [itemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [activePageNumber, setActivePageNumber] = useState<number>(
    INITIAL_ACTIVE_PAGE
  );
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [itemsCount, setItemsCount] = useState<number>(null);
  const [sortData, setSortData] = useState<SortItemsType>({
    sortField: '',
    sortOrder: '',
  });

  const getActivePageNumber = (page: number) => {
    setActivePageNumber(page);
  };

  return (
    <>
      <div className="row g-5 d-flex justify-content-center mt-2">
        <div className="col-md-6">
          <Search
            onSearchTermChange={(value) => setSearchTerm(value)}
          />
        </div>
        <div className="col-md-4 col-sm-4">
          <SortProducts
            sortDataDetails={sortByData}
            onSelectSortItems={(sortValue) => setSortData(sortValue)}
          />
        </div>
      </div>

      <ProductsList
        searchTerm={searchTerm}
        sortDetails={sortData}
        pageNumber={activePageNumber}
        onItemsCountChange={(count) => setItemsCount(count)}
      />

      <div className="d-flex justify-content-center">
        {itemsCount && (
          <ProductPagination
            activePage={activePageNumber}
            itemsPerPage={itemsPerPage}
            totalProducts={itemsCount}
            onPageNumClick={getActivePageNumber}
          />
        )}
      </div>
    </>
  );
}
