import React from "react";
import "./Land.css";
import Card from "react-bootstrap/Card";
function Land() {
  return (
    <div>
      <Card className="Land">
        <Card.Img
          className="imgs"
          variant="top"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
        />
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
}

export default Land;
