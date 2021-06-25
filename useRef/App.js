import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, settext] = useState("");
  const pretext = useRef();

  useEffect(() => {
    pretext.current = text;
  }, [text]);
  return (
    <>
      <input value={text} onChange={(e) => settext(e.target.value)} />
      <div>
        text = {text} text = {pretext.current}
      </div>
    </>
  );
}
