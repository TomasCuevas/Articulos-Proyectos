import React from "react";
import ReactDOM from "react-dom/client";

//* app principal component *//
import { App } from "./App.jsx";

//* styles *//
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
