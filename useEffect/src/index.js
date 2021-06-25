import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Happy from "./Happy";
import Waffy from "./Waffy";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Happy />
    <Waffy />
  </StrictMode>,
  rootElement
);