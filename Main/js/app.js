import React, { Component } from "react";
import ReactDOM from "react-dom";
import Exercise from "./Components/exercise";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../scss/style.scss";
import exercise from "./Components/exercise";

class Ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      name: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("działa button");
    this.setState({
      name: "",
      id: [...this.state.id, this.state.name],
      add: "",
    });
  };

  onChange = (event) => {
    this.setState({ add: event.target.value });
    console.log(add);
  };

  render() {
    console.log("option?" + this.state.add);
    return (
      <div>
        <Form onSubmit={this.onSubmit} onChange={this.onSubmit}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Wszystkie ćwiczenia</Form.Label>
            <Form.Control as="select" custom>
              {this.props.Exercise.map((el) => (
                <option
                  value={this.state.name}
                  key={el.id}
                  onChange={this.onSubmit}
                >
                  {el.name}
                </option>
              ))}
            </Form.Control>
            <Button
              value={this.state.name}
              variant="dark"
              type="submit"
              // onChange={this.handleSubmit}
            >
              Wybierz
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "",
    };
  }

  render() {
    console.log("sprawdzam czy działa" + this.state.add);
    return (
      <div>
        <Ex Exercise={exercise} />
      </div>
    );
  }
}

ReactDOM.render(<App Exercise={Exercise} />, document.getElementById("app"));
