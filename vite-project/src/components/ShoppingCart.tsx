import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";

interface shopingCartProps {
  isOpen: boolean;
}
function ShoppingCart({ isOpen }: shopingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}

export default ShoppingCart;
