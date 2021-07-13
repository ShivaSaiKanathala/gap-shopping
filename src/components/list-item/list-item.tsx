import React from "react";
import { QuantityInput, Button } from "../../components";
import {
  ListItemContainer,
  ListItemRow,
  ItemName,
} from "./list-item-components";

type Props = {
  type: "active" | "inactive";
  name: string;
  quantity: number;
  onQuantityChange: (e: any) => void;
  onChangeStatus: (e: any) => void;
  onDelete: (e: any) => void;
};

export default function ListItem({
  type,
  name,
  quantity,
  onQuantityChange,
  onChangeStatus,
  onDelete,
}: Props) {
  return (
    <ListItemContainer>
      <ListItemRow>
        <ItemName>{name}</ItemName>
      </ListItemRow>
      <ListItemRow>
        {type === "active" && (
          <QuantityInput value={quantity} onChange={onQuantityChange} />
        )}
      </ListItemRow>
      <ListItemRow>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </ListItemRow>
      <ListItemRow>
        {type === "active" && (
          <Button variant="primary" onClick={onChangeStatus}>
            Save for Later
          </Button>
        )}
        {type === "inactive" && (
          <Button variant="success" onClick={onChangeStatus}>
            Move to Active
          </Button>
        )}
      </ListItemRow>
    </ListItemContainer>
  );
}
