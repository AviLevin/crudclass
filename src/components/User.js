import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: []
    };
  }


  componentDidMount() {
    // const { match, location, history } = this.props.user;
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result

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

    const { error, isLoaded, user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      console.log("user is",user);
      return (
         <div className="card text-white bg-info col-sm-2 new1 "  >
      <h1>{user.name}</h1>
      <br></br>
      <ul>
        <li>{user.phone}</li>
        <li>{user.email}</li>
        --------------------
        <li>{user.username}</li>
        <li>{user.website}</li>
        <li>{user.id}</li>
        
      </ul>
    </div>
      );
    }
  }
}


export default User;

