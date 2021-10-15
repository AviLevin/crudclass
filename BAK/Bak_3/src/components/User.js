import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employee: []
    };
  }


  componentDidMount() {
    // const { match, location, history } = this.props.employee;
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            employee: result

          });


        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {

    const { error, isLoaded, employee } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      console.log("employee is",employee);
      return (
       <div>


<table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee ID</th>
                <th> Employee Mail</th>
                <th> Employee Address</th>
                <th> Employee Phone</th>
                <th> Employee Website </th>
                {/* <th> Actions</th> */}
              </tr>
            </thead>
            <tbody>
              
                <tr key={employee.id}>
                  <td> {employee.name} </td>
                  <td> {employee.id} </td>
                  <td> {employee.email}</td>
                  <td> {employee.address.street}</td>
                  <td> {employee.phone }</td>
                  <td> {employee.website}</td>
                
                  <td>

                  
                  </td>
                </tr>
              
            </tbody>
          </table>
       </div>
      );
    }
  }
}


export default User;

