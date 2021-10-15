import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const myStyle = {
  color: "red",
  fontSize: "x-large",
};

const MyModal = (props) => {
  const [show, setShow] = useState(false);
  const [visibility, setvisibility] = useState(false);
  const [form, setForm] = useState();
  const [name, setName] = useState();

  // const {  handleEdit } = this.props;

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    setvisibility(false);
  };

  const handleAlert = () => {
    setvisibility(true);
    props.handleAddItem();
  };

  const handleChange = (event) => {
    // const { name, value } = event.target;

    setName(event.target.value)

    // this.setState({
    //   form: { ...form, [name]: value },
    // });
  };

  // changeFirstNameHandler = (event) => {
  //   this.setState({ firstName: event.target.value });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const { name } = name;
    // const { updateRow } = this.props;

    const updatedUser = {
      name,
    };

    props.handleEdit( updatedUser);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label> First Name: </label>
            <input
              onChange={handleChange}
              
              placeholder="First Name"
              name="firstName"
              className="form-control"
              // value={this.state.firstName}
              // onChange={this.changeFirstNameHandler}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {visibility && <div style={myStyle}> Employee Added </div>} &nbsp;
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
