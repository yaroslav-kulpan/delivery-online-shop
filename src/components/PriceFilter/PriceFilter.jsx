import React from "react";

import { withFormik } from "../../hocs";
import { toCurrency } from "../../lib";

const PriceFilter = ({ handleChange, values, onSubmit }) => {
  const { minPrice, maxPrice } = values;
  return (
    <form onSubmit={onSubmit}>
      <h5>Цена</h5>
      <div className="row mt-3">
        <div className="col-6">
          <input
            type="text"
            name="minPrice"
            onChange={handleChange}
            className="form-control"
            placeholder={toCurrency({ price: 0 })}
            aria-label="default input example"
            value={minPrice}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            name="maxPrice"
            onChange={handleChange}
            className="form-control"
            placeholder={toCurrency({ price: 1000 })}
            aria-label="default input example"
            value={maxPrice}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" type="submit">
        Применить
      </button>
    </form>
  );
};

const handleSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

export default withFormik({
  initialValues: { minPrice: "", maxPrice: "" },
  handleSubmit,
})(PriceFilter);
