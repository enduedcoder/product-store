import React from 'react';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { GET_PRODUCT_PRICE } from '../../graphql';
import { Spinner } from '../../components';
import { capitalizeFirstLetter, dateFormatter } from '../../utils';
import './ProductDetails.scss';

export default function ProductDetails(): JSX.Element {
  let { productId } = useParams();
  let history = useHistory();

  const { data, error, loading } = useQuery(GET_PRODUCT_PRICE, {
    variables: { productId: productId },
  });

  if (loading) return <Spinner />;

  if (error)
    return <p>Unable to show product details at the moment!</p>;

  const handlePreviousPageClick = () => {
    history.push('/');
  };

  return (
    <>
      <div className="d-flex justify-content-start my-4">
        <Button
          className="ms-4 d-flex align-items-center"
          variant="outline-dark"
          size="sm"
          onClick={handlePreviousPageClick}
        >
          <FaArrowLeft className="me-2" />
          Go to previous page
        </Button>
      </div>

      <div className="card w-75 m-3 mx-auto border-dark">
        <div className="card h-100">
          <div className="card-body">
            <img
              src={data?.product.image}
              className="card-img-top"
              alt={data?.product.title}
            />
            <h5 className="card-title my-3">{data?.product.title}</h5>
            <p className="card-text">
              <b className="sub-heading">Description: </b>
              {capitalizeFirstLetter(data?.product.description)}
            </p>
            <p className="card-text">
              <b className="sub-heading">Color: </b>
              {capitalizeFirstLetter(data?.product.color)}
            </p>
            <p className="card-text">
              <b className="sub-heading">Material: </b>
              {data?.product.material}
            </p>
            <p className="card-text">
              <b className="sub-heading">Release date: </b>
              {dateFormatter(data?.product.release_date)}
            </p>
          </div>
          <div className="card-footer">
            <b>$ {data?.product.priceDetails.price}</b>
          </div>
        </div>
      </div>
    </>
  );
}
