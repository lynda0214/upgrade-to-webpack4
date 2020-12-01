import React, {Component} from "react";
import "./Sample.css";

export default class Sample extends Component {
  render() {
    console.log('Sample'); // didn't log this
    return <div className="title">Hello World</div>
  }
}
