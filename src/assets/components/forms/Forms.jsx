import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Forms = () => {
  return (
    <Form className="mt-5 ">
      <h1 className="mb-3 text-uppercase fs-1">
        Looking for a particular product?
      </h1>
      <h3 className="mb-3 text-capitalize fs-3">
        Leave us a comment and we will be in touch
      </h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-5">Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="fs-5">Product Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Forms;
