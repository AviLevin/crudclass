import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const myStyle = {
color:"red",
fontSize:"x-large"
  
}

const MyModal = (props) => {
  const [show, setShow] = useState(false);
  const [visibility, setvisibility] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    setvisibility(false);
  };

  const handleAlert = () => {
    setvisibility(true);
    props.handleAddItem();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label> First Name: </label>
            <input
              onChange={props.changeFirstNameHandler}
              // value={this.state.name}
              placeholder="First Name"
              name="firstName"
              className="form-control"
              // value={this.state.firstName}
              // onChange={this.changeFirstNameHandler}
            />
            
          </div>
        </Modal.Body>
        <Modal.Footer>
        {visibility && <div style={myStyle} > Employee Added </div>} &nbsp;
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAlert}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
