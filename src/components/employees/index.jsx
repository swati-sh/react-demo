import React, { Component } from "react";
import EmployeesListComponent from "./employeesList";
import "./index.css";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    // Declaring the state of the employees component
    this.state = {
      name: "",
      age: "",
      title: "Employees",
      employeesList: [],
    };
  }

  //OnInput field name change
  onInputChang(e) {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ age: e.target.value });
    }
  }
  saveEmoloyees() {
    let obj = { name: this.state.name, age: this.state.age };
    this.setState({ employeesList: [...this.state.employeesList, obj] });
  }

  //This function is being called when the child button is clicked
  // childButtonClicked(data) {
  //   console.log(data);
  // }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.onInputChang(e)}
        />
        <input
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={(e) => this.onInputChang(e)}
        />
        <button onClick={() => this.saveEmoloyees()}>Submit</button>
        <EmployeesListComponent
          employeesList={this.state.employeesList}
          // childButtonClicked={(data) => this.childButtonClicked(data)} // Passing function as a props to child component
        />
      </div>
    );
  }
}
