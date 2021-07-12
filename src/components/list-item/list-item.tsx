import React from "react";
import { QuantityInput, Button } from "../../components";
import {
  ListItemContainer,
  ListItemRow,
  ItemName,
} from "./list-item-components";

type Props = {
  name: string;
};

export default function List({ name }: Props) {
  return (
    <ListItemContainer>
      <ListItemRow>
        <ItemName>{name}</ItemName>
      </ListItemRow>
      <ListItemRow>
        <QuantityInput value={10} />
      </ListItemRow>
      <ListItemRow>
        <Button variant="danger">Delete</Button>
      </ListItemRow>
      <ListItemRow>
        <Button variant="primary">Save for Later</Button>
      </ListItemRow>
    </ListItemContainer>
  );
}
