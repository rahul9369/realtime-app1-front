import React from "react";
import Card from "./Components/Cardlist";
import Newproduct from "./Components/addnew";
import Show from "./Components/show";
import Edit from "./Components/Edit";
import { Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Land from "./Components/Land";

function App() {
  return (
    <div className="Home">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ShopCart</Navbar.Brand>
          <Nav className="me-auto" style={{ margin: "10px 20px" }}>
            <Link to="/" style={{ margin: "10px" }}>
              Home
            </Link>
            <Link to="/product" style={{ margin: "10px" }}>
              Products
            </Link>
            <Link to="/New" style={{ margin: "10px" }}>
              New Item
            </Link>

            <input
              type="text"
              style={{ borderRadius: "20px", margin: "0px 5px" }}
            />
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/product" element={<Card />} />
        <Route path="/" element={<Land />} />
        <Route path="/New" element={<Newproduct />} />
        <Route path="/product/:id" element={<Show />} />
        <Route path="/product/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
