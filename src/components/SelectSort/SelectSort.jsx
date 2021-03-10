import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import CategoriesService from "../../services/categories.service";

class SelectSort extends PureComponent {
  categoriesService = new CategoriesService();
  state = {
    categories: [],
    category: "",
    error: null,
  };

  componentDidMount() {
    const { categoryId } = queryString.parse(this.props.location.search);
    if (categoryId) {
      this.setState({ category: categoryId });
    }
    this.categoriesService
      .getAllCategories()
      .then(({ data: { result: categories } }) => this.setState({ categories }))
      .catch((error) => this.setState({ error }));
  }

  handleChangeCategory = (evt) => {
    const { value } = evt.target;
    this.setState({ category: value });
    if (!value) {
      this.props.history.push(`products`);
      return;
    }
    this.props.history.push(`?categoryId=${value}`);
  };

  render() {
    const { categories, category } = this.state;
    return (
      <select
        name="category"
        id="category"
        className="form-select"
        aria-label="Sort"
        value={category}
        onChange={this.handleChangeCategory}
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
}

export default withRouter(SelectSort);
