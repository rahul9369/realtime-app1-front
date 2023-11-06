import React, { useState, useEffect } from "react";
import "./Edit.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Edit() {
  const [blog, setBlog] = useState({
    author: "",
    img: "",
    desc: "",
  });
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => {
      setBlog({
        author: res.data.author,
        img: res.data.img,
        desc: res.data.desc,
      });
    });
  }, []);
  let submitHandler = (e) => {
    e.preventDefault();
    axios.patch(`/blogs/${id}/edit`, blog).then(() => {
      Navigate("/product");
    });
  };
  return (
    <div>
      <Form onSubmit={submitHandler} className="Edit">
        <h1 style={{ textAlign: "center" }}>Edit Product</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Img</Form.Label>
          <Form.Control
            type="url"
            placeholder="Img url"
            name="img"
            value={blog.img}
            onChange={(e) => {
              setBlog({ ...blog, img: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            name="author"
            value={blog.author}
            onChange={(e) => {
              setBlog({ ...blog, author: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            as="textarea"
            rows={3}
            name="desc"
            value={blog.desc}
            onChange={(e) => {
              setBlog({ ...blog, desc: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
