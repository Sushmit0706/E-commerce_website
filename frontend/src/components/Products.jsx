import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        if (componentMounted) {
          setData(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching the API:', error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category.name === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2 animate-heading"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 animate-heading"
            onClick={() => filterProduct("Clothes")}
          >
            Clothes
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 animate-heading"
            onClick={() => filterProduct("Electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 animate-heading"
            onClick={() => filterProduct("Furniture")}
          >
            Furniture
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2 animate-heading"
            onClick={() => filterProduct("Toys")}
          >
            Toys
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4 animate-heading"
            >
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.images[0]}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    // <div className="background-image">
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center  animate-heading">
              Latest Products
            </h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    // </div>
  );
};

export default Products;
