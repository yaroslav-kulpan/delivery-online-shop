import { connect } from "react-redux";
import { logout } from "../redux/auth/auth.actions";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    return <WrappedComponent {...props} />;
  };

  const mapState = (state) => ({
    loginIn: Boolean(state.auth.accessToken),
  });

  const mapDispatchToProps = {
    logout,
  };

  return connect(mapState, mapDispatchToProps)(WithAuth);
};

export default withAuth;
