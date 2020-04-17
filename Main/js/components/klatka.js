import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Klatka extends Component {
  constructor(props) {
    super(props);
    this.state = { showMe: true };
  }
  showK = () => {
    this.setState({ showMe: !this.state.showMe });
  };
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
        <button onClick={this.showK}>toggle</button>
        <>
          {this.state.showMe ? <div>{klatkaEx}</div> : <h1>Pokaż ćwiczenia</h1>}
        </>
      </>
    );
  }
}
