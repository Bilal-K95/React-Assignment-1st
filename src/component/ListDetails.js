import React, { Component } from "react";

export default class Employees extends Component {
  render() {
    return (
      <>
      <div className="text-center">
        <h1>EMPLOYEES DATA</h1>
      </div>
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.empDatails.map((emp, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{emp.name}</td>
                  <td>{emp.location}</td>
                  <td>{emp.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
    );
  }
}
