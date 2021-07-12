import React from "react";
import { Button, QuantityInput } from "./components";

function App() {
  return (
    <div>
      <Button variant="primary">Button</Button>
      <QuantityInput value={10} />
    </div>
  );
}

export default App;
