<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import queryString from "query-string";
import CategoriesService from "../../services/categories.service";

  const initialState = {
    categories: [],
    category: "",
    error: null,
  };
  const SelectSort = () => {
=======
import React, { useState, useMemo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import CategoriesService from "../../services/categories.service";

const initialState = {
  categories: [],
  category: "",
  error: null,
};

const SelectSort = () => {
>>>>>>> c8471907fbd5c7d6bf84e86b71542e1e8692f8dd
  const categoriesService = useMemo(() => new CategoriesService(), []);
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const history = useHistory();
<<<<<<< HEAD
  
    useEffect(() => {
    const { categoryId } = queryString.parse(location.search);
    if (categoryId) {
      setState(prevState => ({ ...prevState, category: categoryId }));
    }
    categoriesService
      .getAllCategories()
      .then(({ data: { result: categories } }) => setState(prevState => ({ ...prevState, categories })))
      .catch((error) => setState(prevState => ({ ...prevState, error })));
  }, [CategoriesService, location.search]);

  const handleChangeCategory = (evt) => {
    const { value } = evt.target;
    setState(prevState => ({...prevState, category: value }));
=======

  useEffect(() => {
    console.log("вызван useEffect");
    const { categoryId } = queryString.parse(location.search);
    if (categoryId) {
      setState((prevState) => ({ ...prevState, category: categoryId }));
    }
    categoriesService
      .getAllCategories()
      .then(({ data: { result: categories } }) =>
        setState((prevState) => ({ ...prevState, categories }))
      )
      .catch((error) => setState((prevState) => ({ ...prevState, error })));
  }, [categoriesService, location.search]);

  const handleChangeCategory = (evt) => {
    const { value } = evt.target;
    setState((prevState) => ({ ...prevState, category: value }));
>>>>>>> c8471907fbd5c7d6bf84e86b71542e1e8692f8dd
    if (!value) {
      history.push(`products`);
      return;
    }
    history.push(`?categoryId=${value}`);
  };
<<<<<<< HEAD
  const { categories, category } = state;
    return (
      <select
        name="category"
        id="category"
        className="form-select"
        aria-label="Sort"
        value={category}
        onChange={handleChangeCategory}
      >
        <option value="">Выбрать категорию</option>
        {categories.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name.ukr}
          </option>
        ))}
      </select>
    );
  }
=======

  const { categories, category } = state;
  return (
    <select
      name="category"
      id="category"
      className="form-select"
      aria-label="Sort"
      value={category}
      onChange={handleChangeCategory}
    >
      <option value="">Выбрать категорию</option>
      {categories.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name.ukr}
        </option>
      ))}
    </select>
  );
};
>>>>>>> c8471907fbd5c7d6bf84e86b71542e1e8692f8dd

export default SelectSort;
