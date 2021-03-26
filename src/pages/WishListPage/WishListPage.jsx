import React from "react";
import { toCurrency } from "../../lib";
import TrashIcon from "../../shared/icons/TrashIcon";

const WishListPage = ({ items = [], removeWishlistItem }) => {
  return (
    <div className="cart-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-heading mb-10">My wishlist</div>
            <div className="table-wishlist">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Stock Status</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {items.map(({ name, price, status, _id, thumbnail }) => (
                    <tr className={_id}>
                      <td>
                        <div className="display-flex align-center">
                          <div className="img-product">
                            <img
                              src={thumbnail}
                              alt={name.ukr}
                              className="mCS_img_loaded"
                            />
                          </div>
                          <div className="name-product">{name.ukr}</div>
                        </div>
                      </td>
                      <td className="price">{toCurrency({ price })}</td>
                      <td>
                        <span className="in-stock-box">{status}</span>
                      </td>
                      <td>
                        <button className="round-black-btn small-btn">
                          Купить
                        </button>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger trash-icon"
                          onClick={() => removeWishlistItem(_id)}
                        >
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
