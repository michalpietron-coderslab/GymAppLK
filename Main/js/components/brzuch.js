import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Brzuch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brzuchEx = this.props.brzuch.map((ele) => {
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
        <h1>Ćwiczenia na brzuch</h1>
        <div>{brzuchEx}</div>
      </>
    );
  }
}
