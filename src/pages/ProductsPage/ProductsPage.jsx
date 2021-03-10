import React, { PureComponent } from "react";
import queryString from "query-string";

import ProductsGrid from "../../components/ProductsGrid";
import Loader from "../../shared/components/Loader";
import Pagination from "../../components/Pagination";

import ProductsService from "../../services/products.service";

import "../../shared/css/globalize.css";
import SelectSort from "../../components/SelectSort";
import ProductsToolbar from "../../components/ProductsToolbar";
import PriceFilter from "../../components/PriceFilter";

class App extends PureComponent {
  productsService = new ProductsService();

  state = {
    products: [],
    loading: false,
    errors: null,
    pager: {
      pages: [],
    },
    page: 1,
    sort: "",
  };

  stringifyQuery = (query) => {
    const queryStr = queryString.stringify(query, { skipEmptyString: true });
    return queryStr ? `?${queryStr}` : "";
  };

  componentDidMount() {
    // console.log(this.props, '[THIS.PROPS]')
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
      this.fetchProducts();
    }
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    this.setState({ loading: true });
    const { categoryId } = queryString.parse(this.props.location.search);
    const params = {
      page: this.state.page,
      categoryId,
      limits: 5,
    };
    for (const key of Object.keys(params)) {
      if (params[key] === "") {
        delete params[key];
      }
    }
    const query = this.stringifyQuery(params);

    this.productsService
      .fetchProducts(query)
      .then(({ data }) =>
        this.setState({ products: data.result, pager: data.pager })
      )
      .catch((errors) => this.setState({ errors: errors.response.data }))
      .finally(() => this.setState({ loading: false }));
  }

  handleSortChange = ({ target: { value: sort } }) => {
    this.setState({ sort });
  };

  goToPage = (event) => {
    const page = Number(event.target.dataset.page);
    this.setState({ page });
  };

  prevPage = () => {
    this.setState((prevState) => this.setState({ page: prevState.page - 1 }));
  };

  nextPage = () => {
    this.setState((prevState) => this.setState({ page: prevState.page + 1 }));
  };

  render() {
    const { products, pager, loading, errors, sort } = this.state;
    return (
      <>
        <ProductsToolbar>
          <SelectSort sort={sort} handleSortChange={this.handleSortChange} />
        </ProductsToolbar>
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-lg-block mt-3">
              <div className="card">
                <div className="card-body">
                  <PriceFilter />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-9">
              {loading && <Loader />}
              {errors && (
                <div className="alert alert-danger" role="alert">
                  {errors.message}
                </div>
              )}
              <ProductsGrid products={products} />
            </div>
          </div>
        </div>
        <Pagination
          pages={pager.pages}
          currentPage={pager.currentPage}
          endPage={pager.endPage}
          prevPage={this.prevPage}
          goToPage={this.goToPage}
          nextPage={this.nextPage}
        />
      </>
    );
  }
}

export default App;
