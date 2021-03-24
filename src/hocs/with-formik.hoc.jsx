import { PureComponent } from "react";

const withFormik = ({ initialValues, handleSubmit }) => (WrappedComponent) => {
  return class WithFormik extends PureComponent {
    state = {
      values: initialValues,
      errors: {},
      touched: {},
      validateOnBlur: true,
      validateOnChange: false,
      submitCount: 0,
    };

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          [name]: value,
        },
      }));
    };

    onSubmit = (event) => {
      event.preventDefault();
      const { values } = this.state;
      handleSubmit(values, this.props, this.resetForm);
    };

    resetForm = () => {
      this.setState({ values: initialValues });
    };

    render() {
      const { values } = this.state;
      return (
        <WrappedComponent
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          values={values}
          {...this.props}
        />
      );
    }
  };
};

export default withFormik;
