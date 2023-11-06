import React from "react";
import "./Show.css";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";

function Show() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => {
      //console.log(res);
      setBlog(res.data);
    });
  });

  let deleteHandler = () => {
    axios.delete(`/blogs/${id}/delete`).then((res) => {
      //console.log(res);
      Navigate("/product");
    });
  };

  return (
    <div className="Show">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src={blog.img}
          style={{ width: "399px", height: "250px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{blog.author}</Card.Title>
          <Card.Text>{blog.desc}</Card.Text>
          <Link to={`/product/${blog._id}/edit`} style={{ margin: "10px" }}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Link to={`product/${blog._id}/delete`}>
            <Button onClick={deleteHandler} variant="danger">
              Delete
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Show;
