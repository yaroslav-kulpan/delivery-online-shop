import React from "react";
import { Link } from "react-router-dom";

import { toCurrency } from "../../lib";
import WishListIcon from "../../shared/icons/WishListIcon";
import useWishlist from "../../hooks/useWishlist";
import useAuth from "../../hooks/use-auth";

const Product = ({ name, price, thumbnail, _id, status }) => {
  const { items, addToWishList } = useWishlist();
  const loginIn = useAuth();
  const isAddedToWish = items.some((item) => item._id === _id);
  return (
    <div className="col-12 col-lg-4">
      <div className="card mt-3">
        <Link to={`/products/${_id}`} className="text-decoration-none">
          <img
            src={thumbnail}
            className="card-img-top card-image"
            alt={name.ukr}
            title={name.ukr}
          />
        </Link>
        <div className="card-body">
          <h6 className="card-title">{name.ukr}</h6>
          <p>Цена: {toCurrency({ price })}</p>
          <button className="btn btn-primary">Купить</button>
          {loginIn && (
            <button
              type="button"
              disabled={isAddedToWish}
              className="btn btn-warning mx-3"
              onClick={() =>
                addToWishList({ _id, price, thumbnail, name, status })
              }
            >
              <WishListIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
