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
  const categoriesService = useMemo(() => new CategoriesService(), []);
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const history = useHistory();
  
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
    if (!value) {
      history.push(`products`);
      return;
    }
    history.push(`?categoryId=${value}`);
  };
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

export default SelectSort;
