import React from "react";
import { ListItem } from "../../components";
import {
  ListAndTitleContainer,
  ListContainer,
  Title,
  EmptyListItem,
} from "./list-components";

type Props = {
  type: "active" | "inactive";
  title: string;
  list: any[];
  onQuantityChange: (e: any, quantity: number) => void;
  onChangeStatus: (e: any) => void;
  onDelete: (e: any) => void;
};

export default function List({
  type,
  title,
  list,
  onQuantityChange,
  onChangeStatus,
  onDelete,
}: Props) {
  return (
    <ListAndTitleContainer>
      <Title>{title}</Title>
      <ListContainer>
        {list.length === 0 && <EmptyListItem>No Items Found</EmptyListItem>}
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              type={type}
              name={item.name}
              quantity={item.quantity}
              onQuantityChange={(quantity) => onQuantityChange(item, quantity)}
              onChangeStatus={() => onChangeStatus(item)}
              onDelete={() => onDelete(item)}
            />
          );
        })}
      </ListContainer>
    </ListAndTitleContainer>
  );
}
