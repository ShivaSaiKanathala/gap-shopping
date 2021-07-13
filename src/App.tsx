import React, { useState } from "react";
import data from "./data/items";
import { Header, List } from "./components";
import { AppContainer } from "./app-components";

function App() {
  const [activeItems, setActiveItems] = useState(data.activeItems);
  const [inactiveItems, setInactiveItems] = useState(data.inactiveItems);
  const [, updateItem] = useState<any>();

  function onQuantityChange(item: any, quantity: number) {
    console.log(item, quantity);
    item.quantity = quantity;
    updateItem({ ...item });
  }

  function onChangeStatus(item: any, status: string) {
    if (status === "active") {
      const index = activeItems.indexOf(item);
      if (index > -1) {
        activeItems.splice(index, 1);
        setActiveItems([...activeItems]);
        setInactiveItems([...inactiveItems, item]);
      }
    } else if (status === "inactive") {
      const index = inactiveItems.indexOf(item);
      if (index > -1) {
        inactiveItems.splice(index, 1);
        setInactiveItems([...inactiveItems]);
        setActiveItems([...activeItems, item]);
      }
    }
  }

  function onDelete(item: any, status: string) {
    if (status === "active") {
      const index = activeItems.indexOf(item);
      if (index > -1) {
        activeItems.splice(index, 1);
        setActiveItems([...activeItems]);
      }
    } else if (status === "inactive") {
      const index = inactiveItems.indexOf(item);
      if (index > -1) {
        inactiveItems.splice(index, 1);
        setInactiveItems([...inactiveItems]);
      }
    }
  }

  return (
    <div>
      <Header itemCount={activeItems.length} />
      <AppContainer>
        <List
          type="active"
          title="Active Items"
          list={activeItems}
          onQuantityChange={onQuantityChange}
          onChangeStatus={(item) => onChangeStatus(item, "active")}
          onDelete={(item) => onDelete(item, "active")}
        />
        <List
          type="inactive"
          title="Save for Later Items"
          list={inactiveItems}
          onQuantityChange={onQuantityChange}
          onChangeStatus={(item) => onChangeStatus(item, "inactive")}
          onDelete={(item) => onDelete(item, "inactive")}
        />
      </AppContainer>
    </div>
  );
}

export default App;
