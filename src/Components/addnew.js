import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Addnew.css";
function Addnew() {
  const [blog, setBlog] = useState({});
  const Navigate = useNavigate();
  useEffect(() => {});

  let submitHandler = (e) => {
    e.preventDefault();
    axios.post("/blogs", blog).then(() => {
      Navigate("/product");
    });
  };
  return (
    <div className="Form">
      <Form onSubmit={submitHandler}>
        <h1 style={{ textAlign: "center" }}>Add New Product</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>IMAGE URL</Form.Label>
          <Form.Control
            type="URL"
            placeholder="URL TYPE LINK"
            onChange={(e) => {
              setBlog({ ...blog, img: e.target.value });
            }}
            name="img"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>AUTHOR</Form.Label>
          <Form.Control
            type="text"
            placeholder="AUTHOR"
            onChange={(e) => {
              setBlog({ ...blog, author: e.target.value });
            }}
            name="author"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="LEAVE TEXT">
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => {
              setBlog({ ...blog, desc: e.target.value });
            }}
            name="desc"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Addnew;
