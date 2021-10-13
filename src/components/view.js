import React, { Component } from "react";
import { Link } from "react-router-dom";


class View extends React.Component {
  render() {
      const  {data} = this.props;
      console.log(data);
    return (
      <div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.name} </td>
                  <td> {employee.id} </td>
                  <td> {employee.email}</td>
                  <td>
                    <Link to={`/users/${employee.id}`}>
                      <button class="btn btn-secondary"> View </button>
                    </Link>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.handleDelete(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default View;
