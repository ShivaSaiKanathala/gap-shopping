import React, { useState } from "react";
import { InputContainer, Input, Button } from "./quantity-input-components";

type Props = {
  value: number;
};

export default function QuantityInput({ value }: Props) {
  const [quantity, setQuantity] = useState(value);

  function increment() {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <InputContainer>
      <Button onClick={decrement}>-</Button>
      <Input type="number" min="1" value={quantity} />
      <Button onClick={increment}>+</Button>
    </InputContainer>
  );
}
