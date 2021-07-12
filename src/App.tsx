import React from "react";
import { Header, List } from "./components";
import { AppContainer } from "./app-components";

function App() {
  return (
    <div>
      <Header />
      {/* <Button variant="primary">Button</Button>
      <QuantityInput value={10} /> */}
      <AppContainer>
        <List title="Active Items" />
        <List title="Save for Later Items" />
      </AppContainer>
    </div>
  );
}

export default App;
