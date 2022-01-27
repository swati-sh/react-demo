import React, { Component } from "react";
import "./index.css";

export class EmployeesListComponent extends Component {
  render() {
    return (
      <section>
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
