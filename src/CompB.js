//import { useState } from "react";
import CompC from "./CompC";

const CompB = (props) => {
  return (
    <>
      <div>inB</div>
      <div>{props.propoA}</div>;
      <CompC propoB={props.propoA} />
      <button onClick={props.updateFunction}>Click to update A from B</button>
    </>
  );
};

export default CompB;
