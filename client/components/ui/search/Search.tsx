import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form, InputGroup, Button } from 'react-bootstrap';

export interface SearchProps {
  onSearchTermChange: (arg: string) => void;
}

export default function Search({
  onSearchTermChange,
}: SearchProps): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleSearchClick = () => {
    onSearchTermChange(value);
  };

  const handleSeachChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === '')
      onSearchTermChange(event.target.value);

    setValue(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search items"
        aria-label="Search items"
        aria-describedby="search-button"
        onChange={handleSeachChange}
      />
      <Button
        variant="outline-dark"
        id="search-button"
        onClick={handleSearchClick}
      >
        <FaSearch />
      </Button>
    </InputGroup>
  );
}
