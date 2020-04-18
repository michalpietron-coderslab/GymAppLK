import React, { Component } from "react";
import ReactDOM from "react-dom";

import exercises from "../exercises"

let style = {
  button: {
    padding: "10px",
    margin: "5px"
  }

}

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);


    if (this.props.elements.length > 0) {

      let elements = this.props.elements.map((element, index) => {
        return (
          <div key={index} >{element.name} <button onClick={() => this.props.onDelete(index)} >Usuń</button></div>
        )
      })

      return (
        <>
          <div>Lista ćwiczeń</div>
          {elements}
        </>
      )

    } else {
      return <div>Jeszcze nic nie ma :(</div>
    }
  }
}