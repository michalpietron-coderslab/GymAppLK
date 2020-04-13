import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../scss/style.scss";
import exercise from "./Components/exercise";

class App extends Component {
  render() {
    return <Ex exercise={exercise} />;
  }
}

class Ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  onAdd = (item) => {
    this.setState({
      list: [...this.state.list, item],
    });
  };

  render() {
    return (
      <>
        <Exercise exercise={this.props.exercise} addClick={this.onAdd} />
        <ExList list={this.state.list} />
      </>
    );
  }
}

class Exercise extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const exList = this.props.exercise.map((el) => {
      return (
        <div className="mainTable">
          <button
            title={el.name}
            key={el.id}
            onClick={() => this.props.addClick(el.name)}
            className="btn btn-primary"
          >
            {el.name}
          </button>
        </div>
      );
    });

    return (
      <>
        <h1>Ćwiczenia</h1>
        <div>{exList}</div>
      </>
    );
  }
}

class ExList extends Component {
  render() {
    return (
      <>
        <h1>Plan</h1>
        <ul>
          {this.props.list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<App exercise={exercise} />, document.getElementById("app"));
