import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProductsService from "../../services/products.service";
import { toCurrency } from "../../lib";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const httpService = useMemo(() => new ProductsService(), []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: product } = await httpService.fetchProductById(productId);
      setProduct(product);
    } catch (errors) {
      setError(errors);
    } finally {
      setLoading(false);
    }
  }, [httpService, productId]);

  useEffect(() => {
    fetchData();
  }, [fetchData, product?.name?.ukr]);

  return (
    <>
      {product && (
        <Helmet htmlAttributes={{ lang: "ukr" }}>
          <title>{product.name.ukr}</title>
          <meta name="description" content={product.description.ukr} />
        </Helmet>
      )}
      <span>{loading && "Loading..."}</span>
      <span>{error && "Error..."}</span>
      {product && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 offset-lg-1 col-lg-4">
              <img
                src={product.thumbnail}
                className="img-fluid w-100 product-cover-image border-1 rounded"
                alt={product.name.ukr}
              />
            </div>
            <div className="col-12 offset-lg-1 col-lg-4">
              <h3 className="mb-4">{product.name.ukr}</h3>
              <b className="d-inline-block my-3">
                {toCurrency({ price: product.price })}
              </b>
              <p>{product.description.ukr}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetailsPage;
