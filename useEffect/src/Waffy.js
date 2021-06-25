import { useEffect, useState } from 'react';
import "./styles.css";

function Waffy() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("count2 changed!");
  }, [count2]);

  return (
    <>
    <h1>Three States Variables are used here</h1>
    <h3>In dependency count 2 is passed</h3>
    <h2>The effect will only run when count2 changes:</h2>
    <div>
      {count1} {count2} {count3}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
      <hr/> 
  </div>
    </>
  );
}

export default Waffy;