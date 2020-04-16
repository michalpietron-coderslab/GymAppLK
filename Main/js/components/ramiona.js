import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Ramiona extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ramionaEx = this.props.ramiona.map((ele) => {
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
        <h1>Ćwiczenia na ramiona</h1>
        <div>{ramionaEx}</div>
      </>
    );
  }
}
