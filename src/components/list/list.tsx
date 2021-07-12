import React from "react";
import { ListItem } from "../../components";
import { ListAndTitleContainer, ListContainer, Title } from "./list-components";

type Props = {
  title: string;
};

export default function List({ title }: Props) {
  return (
    <ListAndTitleContainer>
      <Title>{title}</Title>
      <ListContainer>
        <ListItem name="Item 1" />
        <ListItem name="Item 2" />
      </ListContainer>
    </ListAndTitleContainer>
  );
}
