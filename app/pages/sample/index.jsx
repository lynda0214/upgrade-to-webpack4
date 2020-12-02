import React, {Component} from "react";
import "./Sample.css";

export default class Sample extends Component {

  constructor(props) {
    super(props);
    console.warn('Sample Constructor');
  }

  componentDidMount() {
    console.warn('Sample Did Mount');
  }

  render() {
    console.log('Sample'); // didn't log this
    return <div className="title">Hello World</div>
  }
}
