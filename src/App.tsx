import React from "react";
import { Header, Button, QuantityInput } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Button variant="primary">Button</Button>
      <QuantityInput value={10} />
    </div>
  );
}

export default App;
