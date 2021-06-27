import { useState } from "react";
import ComponentB from "./ComponentB";
import "./styles.css";
import MyContext from "./MyContext";
export default function App() {
  const [myState, setMyState] = useState("Hello World");

  console.log(useState("Hello World"));
  return (
    <>
      <MyContext.Provider value={myState}>
        <div className="App">
          <ComponentB />
          <button onClick={() => setMyState("Heyy changed")}>Click Me</button>
        </div>
      </MyContext.Provider>
    </>
  );
}
