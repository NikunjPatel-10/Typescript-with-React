import React from "react";
import { Button, Container, Nav, Navbar as NavBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cart from "./../assets/Images/cart.png";
import "./Navbar.css";
import { useShoppingCart } from "../context/ShopingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <button className=" btn-wrapper" onClick={openCart}>
          <figure className="image-wrapper mb-0">
            <img src={cart} alt="cart.png" />
          </figure>
          <span className="item-wrapper">{cartQuantity}</span>
        </button>
      </Container>
    </NavBs>
  );
}

export default Navbar;
