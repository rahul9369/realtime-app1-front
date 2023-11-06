import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./New.css";
function New(props) {
  return (
    <div className="New">
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
          style={{ width: "399px", height: "250px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{props.author}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Link variant to={`/product/${props.id}`}>
            <Button variant="primary">View Blog</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default New;
