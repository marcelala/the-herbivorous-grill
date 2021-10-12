import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MenuStateProvider } from "./state/MenuStateProvider";
import HerbivorousGrill from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MenuStateProvider>
      <HerbivorousGrill />
    </MenuStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
