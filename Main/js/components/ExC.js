import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import Exercise from "../app.js";
import exercise from "./listOfexercises/exercise.js";
export default class ExC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <>
        <p></p>
        <Exercise list={this.state.list} />
      </>
    );
  }
}
