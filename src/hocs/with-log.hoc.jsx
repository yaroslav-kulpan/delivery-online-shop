import { Component } from "react";

const withLog = (WrappedComponent) => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(`With Log@ name: ${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
export default withLog;
