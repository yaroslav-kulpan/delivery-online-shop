import React from "react";
import { withRouter } from "react-router-dom";

import { withFormik, withLog } from "../../hocs";
import { compose } from "../../lib";

const Search = ({ handleChange, values, onSubmit }) => {
  const { query } = values;
  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        name="query"
        className="form-control me-2"
        type="search"
        onChange={handleChange}
        placeholder="Search"
        aria-label="Search"
        value={query}
      />
      <button className="btn btn-outline-success" type="submit">
        Поиск
      </button>
    </form>
  );
};

const handleSubmit = ({ query }, { searchProducts }, resetForm) => {
  searchProducts(query);
  // resetForm();
  // console.log(resetForm);
  // alert(JSON.stringify({ ...values, ...ownProps }));
};

// compose(withLog);

export default compose(
  withRouter,
  withFormik({ initialValues: { query: "" }, handleSubmit }),
  withLog
)(Search);
