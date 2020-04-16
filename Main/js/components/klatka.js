import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Klatka extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const klatkaEx = this.props.klatka.map((ele) => {
      return (
        <div className="mainTable" key={ele.id}>
          <button
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
        <h1>Ćwiczenia na klatkę piersiową</h1>
        <div>{klatkaEx}</div>
      </>
    );
  }
}
