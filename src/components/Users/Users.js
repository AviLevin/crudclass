import React, { Component } from "react";
import Add from "../Add";
// import Add2 from "./Add/Add2"
import View from "../View/View";
import classes from "./Users.module.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      value: "",
      firstName: "",
      phone: "",
      id: "",
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
    console.log("added");
  }

  handleEdit = (id, updatedUser) => {  
    const { employees } = this.state;
    const index = employees.indexOf(updatedUser);
    employees[index] = { ...updatedUser };
    this.setState({
      employees: employees.map((employee) => (employee.name === id ? updatedUser : employee)),
    });
    console.log("is edited")
    console.log(updatedUser);
    console.log( id);
  };
  
//   handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//    this.setState({ counters });

// }



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
    const { employees } = this.state;
    const data = employees;
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <Add
          changeFirstNameHandler={this.changeFirstNameHandler}
          handleAddItem={this.handleAddItem}
        >
          {" "}
        </Add>
        <div className="row"></div>
        <br></br>

        <View
          data={data}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          id={this.state.id}
        ></View>
      </div>
    );
  }
}

export default Users;
