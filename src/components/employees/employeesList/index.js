import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const EmployeesListComponent = (props) => {
  const safesList = useSelector((state) => state.safesList);
  console.log("safesList", safesList);
  return (
    <section>
      <h3>------------------Employees Details-----------------</h3>
      {props.employeesList.length === 0 ? (
        <div className="no-data">No data Found</div>
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
            {props.employeesList.map((employee) => (
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
};

export default EmployeesListComponent;
