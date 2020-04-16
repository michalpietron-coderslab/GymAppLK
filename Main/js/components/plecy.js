import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Plecy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const plecyEx = this.props.plecy.map((ele) => {
      return (
        <div className="mainTable" key={ele.id}>
          <button
            title={ele.name}
            key={ele.id}
            onClick={() => this.props.addClick(ele.name)}
            className="btn btn-primary"
          >
            {ele.name}
          </button>
        </div>
      );
    });

    return (
      <>
        <h1>Ćwiczenia na plecy</h1>
        <div>{plecyEx}</div>
      </>
    );
  }
}
