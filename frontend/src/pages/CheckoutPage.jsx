import { useContext, useMemo } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import React from "react";
import { CartContext } from "../context/cart/cartContext";

function CheckoutPage() {
  const { cart } = useContext(CartContext);

  const sum = useMemo(() => {
    return cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <Container>
      <Stack direction="vertical" gap={4} className="my-4">
        <h2>Checkout</h2>
        You have to pay: {sum} EGP
        <Button variant="danger">Confirm</Button>
      </Stack>
    </Container>
  );
}

export default CheckoutPage;