import React, { useEffect } from "react";
import "./styles.css";

function Happy() {
  //const message = `Hello, ${name}!`;

  useEffect(() => {
    alert("Mayur here")
    //document.title = 'Greetings page';
  }, []);

  return (
    <>
  <div>One pop up will come , This runs only once after rendering</div>
  <hr/>
  </>
  );
  }

export default Happy;