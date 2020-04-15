import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../scss/style.scss";
import exercise from "./components/exercise";
import ExC from "./components/ExC";
import nogi from "./components/nogi";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Ex exercise={exercise} />
        <Route exact path="/" component={Exercise} />
        <Route path="/exercises/" component={ExC} />
      </HashRouter>
    );
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
        <Nogi nogi={nogi} />
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
        <div className="mainTable" key={el.id}>
          <button
            title={el.name}
            key={el.id}
            onClick={() => this.props.addClick(el.name)}
            className="btn btn-primary"
          >
            {el.name}
          </button>
          <Link to={"/exercises/:" + el.name}> {el.name}</Link>
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
class Nogi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nogii = this.props.nogi.map((ele) => {
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
          {/* <Link to={"/exercises/:" + el.name}> {el.name}</Link> */}
        </div>
      );
    });

    return (
      <>
        <h1>Ćwiczenia</h1>
        <div>{nogii}</div>
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
          {this.props.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}

ReactDOM.render(
  <App exercise={exercise} nogi={nogi} />,
  document.getElementById("app")
);
