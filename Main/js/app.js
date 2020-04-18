import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../scss/style.scss";

import Menu from "./Menu";
import ExercisesList from "./components/ExercisesList"
import Legs from "./components/Legs";
import Stomach from "./components/Stomach";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addHandler = (item) => {
    this.setState({
      list: [...this.state.list, item]
    })
  }

  deleteHandler = (index) => {

    let exList = this.state.list;


    exList.splice(index, 1);
    this.setState({
      list: exList
    })

  }

  render() {

    let links = [
      {
        url: 'stomach',
        title: 'Brzuch',
      },
      {
        url: 'legs',
        title: 'Nogi',
      }
    ]

    return (

      <HashRouter>
        <>
          <Menu menuItems={links} />
          <ExercisesList elements={this.state.list} onDelete={this.deleteHandler} />
          <Route path='/exercises/legs' render={() => <Legs onClick={this.addHandler} />} />
          <Route path='/exercises/stomach' render={() => <Stomach onClick={this.addHandler} />} />
        </>
      </HashRouter>
    );
  }
}






ReactDOM.render(<App />, document.getElementById("app"));
