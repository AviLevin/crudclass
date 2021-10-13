import React, { Component } from "react";
import MyModal from "./Modal/Modal";
import { Link } from "react-router-dom";


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      value: "",
      firstName: "",
      phone: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  handleAddItem(event) {
    // event.preventDefault();

    var newItem = {
      name: this.state.firstName,
      phone: this.state.phone,
    };

    this.setState((prevState) => ({
      employees: [newItem, ...this.state.employees],
      name: "",
      phone: "",
    }));
    console.log("added")

  }

  handleDelete = (employee) => {
    const employees = this.state.employees.filter((c) => c.id !== employee);
    this.setState({ employees });
    console.log("deleted");
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            employees: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.log(this.state.employees);
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <MyModal 
        changeFirstNameHandler= {this.changeFirstNameHandler}
        handleAddItem={this.handleAddItem}
        > </MyModal>
        <div className="row"></div>
        <br></br>
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
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.name} </td>
                  <td> {employee.id} </td>
                  <td> {employee.email}</td>
                  <td>

                  <Link to={`/users/${employee.id}`} >


<button class="btn btn-secondary" >    More Info..</button>
</Link>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>

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

export default Users;
