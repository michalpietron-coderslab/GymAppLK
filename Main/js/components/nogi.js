import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Nogi extends Component {
  constructor(props) {
    super(props);
    this.state = { showMe: true };
  }
  showN = () => {
    this.setState({ showMe: !this.state.showMe });
  };
  render() {
    const nogiEx = this.props.nogi.map((ele) => {
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
        <h1>Ćwiczenia na nogi</h1>
        <button onClick={this.showN}>toggle</button>
        <>
          {this.state.showMe ? <div>{nogiEx}</div> : <h1>Pokaż ćwiczenia</h1>}
        </>
      </>
    );
  }
}
