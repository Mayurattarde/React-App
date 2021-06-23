import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CompA from "./CompA";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CompA />
  </StrictMode>,
  rootElement
);
