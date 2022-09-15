import React, { useState } from 'react';
import { SortItemsType, capitalizeFirstLetter } from '../../../utils';
import Dropdown from 'react-bootstrap/Dropdown';
import './SortProducts.scss';

export interface SortProductsProps {
  sortDataDetails: SortItemsType[];
  onSelectSortItems?: (arg: SortItemsType) => void;
}

export default function SortProducts({
  sortDataDetails,
  onSelectSortItems,
}: SortProductsProps) {
  const [sortItems] = useState<SortItemsType[]>(sortDataDetails);
  const [toggleContent, setToggleContent] = useState<string>('');

  const handleSelectItem = (eventKey) => {
    const { sortField, sortOrder } = sortItems.find(
      ({ code }) => eventKey === code
    );

    onSelectSortItems({ sortField, sortOrder });
    setToggleContent(`${sortField} - ${sortOrder.toUpperCase()}`);
  };

  return (
    <Dropdown onSelect={handleSelectItem}>
      <Dropdown.Toggle
        variant="outline-dark"
        id="dropdown-items"
        className="text-left w-100"
      >
        Sort By : <b>{capitalizeFirstLetter(toggleContent)}</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {sortItems.map(({ code, sortField, sortOrder }) => (
          <Dropdown.Item key={code} eventKey={code}>
            {capitalizeFirstLetter(sortField)} :{' '}
            {sortOrder.toUpperCase()}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
