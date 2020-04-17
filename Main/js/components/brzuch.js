import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

export default class Brzuch extends Component {
  constructor(props) {
    super(props);
    this.state = { showMe: true };
  }
  showB = () => {
    this.setState({ showMe: !this.state.showMe });
  };
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
        <button onClick={this.showB}>toggle</button>
        <>
          {this.state.showMe ? <div>{brzuchEx}</div> : <h1>Pokaż ćwiczenia</h1>}
        </>
      </>
    );
  }
}
