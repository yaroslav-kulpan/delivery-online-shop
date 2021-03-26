import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../redux/auth/auth.operations";

import App from "./App";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

export default connect(null, { getCurrentUser })(AppContainer);
