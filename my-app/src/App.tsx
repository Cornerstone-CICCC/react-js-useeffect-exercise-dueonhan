import { useState } from "react";
import Counter from "./components/Couter";
import Message from "./components/Message";
import Box from "./components/Box";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Message />
      <Counter />
      <Box />
    </>
  );
}

export default App;
