import React from "react";
import { HeaderContainer, Title, Summary } from "./header-components";

type Props = {
  itemCount: number;
};

export default function Header({ itemCount }: Props) {
  return (
    <HeaderContainer>
      <Title>Gap Shopping Bag</Title>
      <Summary>
        {itemCount + " " + (itemCount === 1 ? "Item" : "Items")}
      </Summary>
    </HeaderContainer>
  );
}
