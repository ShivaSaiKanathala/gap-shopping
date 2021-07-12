import React from "react";
import { ListContainer, Title } from "./list-components";

type Props = {
  title: string;
};

export default function List({ title }: Props) {
  return (
    <ListContainer>
      <Title>{title}</Title>
    </ListContainer>
  );
}
