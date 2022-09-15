import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductType } from '../../utils';
import './ProductCard.scss';

export interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({
  product,
}: ProductCardProps): JSX.Element {
  const history = useHistory();

  const handleShowProductDetails = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div
      className="card col-xs-9 col-sm-4 col-md-3 col-lg-3 my-3 mx-3 p-3 border-secondary shadow rounded"
      onClick={handleShowProductDetails}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.image}
      />
      <div className="card-body d-flex align-items-center flex-column ">
        <p className="card-title">{product.title}</p>
        <p className="card-text">
          <b>$ {product.priceDetails.price}</b>
        </p>
      </div>
    </div>
  );
}
