import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../scss/style.scss";

import exercise from "./components/listOfexercises/exercise";
import ExC from "./components/ExC";

import Nogi from "./components/nogi";
import nogi from "./components/listOfexercises/nogi";

import plecy from "./components/listOfexercises/plecy";
import Plecy from "./components/plecy";

import Brzuch from "./components/brzuch";
import brzuch from "./components/listOfexercises/brzuch";

import Klatka from "./components/klatka";
import klatka from "./components/listOfexercises/klatka";

import Ramiona from "./components/ramiona";
import ramiona from "./components/listOfexercises/ramiona";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    return (
      <HashRouter>
        <>
          <Ex />
          <Route exact path="/" component={Ex} />
          <Route path="/exercises/" component={ExC} />
        </>
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
        <Exercise exercise={exercise} addClick={this.onAdd} />
        <ExList list={this.state.list} />
        <Nogi nogi={nogi} addClick={this.onAdd} />
        <Plecy plecy={plecy} addClick={this.onAdd} />
        <Brzuch brzuch={brzuch} addClick={this.onAdd} />
        <Klatka klatka={klatka} addClick={this.onAdd} />
        <Ramiona ramiona={ramiona} addClick={this.onAdd} />
      </>
    );
  }
}

class Exercise extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const exl = exercise.map((el) => {
    //   return (
    //     <div className="mainTable" key={el.id}>
    //       {/* <button
    //         title={el.name}
    //         key={el.id}
    //         onClick={() => this.props.addClick(el.name)}
    //         className="btn btn-primary"
    //       >
    //         {el.name}
    //       </button> */}
    //       <Link to={"/exercises/" + el.name}> {el.name}</Link>
    //     </div>
    //   );
    // });

    return (
      <>
        <h1>Ćwiczenia</h1>
        {/* <div>{exl}</div> */}
      </>
    );
  }
}

export default class ExList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.removeExercise = this.removeExercise.bind(this);
  }

  removeExercise = (index) => {
    console.log("najpierw masa a potem masa" + index);
    const array = this.state.list;
    array.splice(index, 1);
    this.setState({ list: array });
  };

  render() {
    return (
      <>
        <h1>Plan</h1>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index} index={index}>
                {item}
                <button onClick={() => this.removeExercise(index)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
