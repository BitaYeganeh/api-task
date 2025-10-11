import { useState } from "react";
import "./Wolt.css";
import Wolt from "./components/Wolt";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="header">Menu</h1>
      <Wolt />
    </>
  );
}

export default App;
