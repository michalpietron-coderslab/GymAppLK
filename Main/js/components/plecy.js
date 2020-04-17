import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Plecy extends Component {
  constructor(props) {
    super(props);
    this.state = { showMe: true };
  }
  showP = () => {
    this.setState({ showMe: !this.state.showMe });
  };
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
        <button onClick={this.showP}>toggle</button>
        <>
          {this.state.showMe ? <div>{plecyEx}</div> : <h1>Pokaż ćwiczenia</h1>}
        </>
      </>
    );
  }
}
