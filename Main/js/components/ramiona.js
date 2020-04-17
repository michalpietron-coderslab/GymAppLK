import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Ramiona extends Component {
  constructor(props) {
    super(props);
    this.state = { showMe: true };
  }
  showR = () => {
    this.setState({ showMe: !this.state.showMe });
  };
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
        <button className="btn btn-primary" onClick={this.showR}>
          toggle
        </button>
        <>
          {this.state.showMe ? (
            <div>{ramionaEx}</div>
          ) : (
            <h1>Pokaż ćwiczenia</h1>
          )}
        </>
      </>
    );
  }
}
