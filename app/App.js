import React, {Component} from "react";

export default class App extends Component {
  render() {
    console.warn('App', this.props);
    return (
      <div>
        {this.props.default}
      </div>
    );
  };
}
