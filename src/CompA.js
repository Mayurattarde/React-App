import { useState } from "react";
import CompB from "./CompB";
import CompD from "./CompD";
import "./styles.css";

const CompA = () => {
  const [A, setA] = useState({
    key1: "10",
    key2: "20",
    key3: "30"
  });

  const handleUpdate = () => {
    setA({
      key1: "100",
      key2: "20",
      key3: "30"
    });
  };

  return (
    <>
      <div>
        <h2>Hello Welcome To Props</h2>
        <CompB updateFunction={handleUpdate} propoA={A.key1} />
        <br />
        <CompD propoD={A.key2} />
      </div>
    </>
  );
};

export default CompA;

/* export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
 */
