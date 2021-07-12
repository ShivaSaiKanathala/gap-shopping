import React, { useState } from "react";
import { InputContainer, Input, Button } from "./quantity-input-components";

type Props = {
  value: number;
  onChange: (e: any) => void;
};

export default function QuantityInput({ value, onChange }: Props) {
  const [quantity, setQuantity] = useState(value);

  function increment() {
    if (quantity < 100) {
      setQuantity(quantity + 1);
      onChange(quantity);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChange(quantity);
    }
  }

  return (
    <InputContainer>
      <Button onClick={decrement}>-</Button>
      <Input type="number" min="1" value={quantity} readOnly />
      <Button onClick={increment}>+</Button>
    </InputContainer>
  );
}
