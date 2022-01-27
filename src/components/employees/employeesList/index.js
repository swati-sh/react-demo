import React, { Component } from "react";
import "./index.css";

export class EmployeesListComponent extends Component {
  onButtonClicked() {
    let obj = {
      name: "abc",
      age: 70,
    };
    // Calling the parent function
    this.props.childButtonClicked(obj);
  }
  render() {
    return (
      <section>
        <button onClick={() => this.onButtonClicked()}>Child Button</button>
        <h3>------------------Employees Details-----------------</h3>
        {this.props.employeesList.length === 0 ? (
          <div>No data Found</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {/* Rendering the employeesList array */}
              {this.props.employeesList.map((employee) => (
                <tr key={employee.name}>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default EmployeesListComponent;
