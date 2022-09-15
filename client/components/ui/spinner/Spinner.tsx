import React from 'react';

export default function Spinner(): JSX.Element {
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
