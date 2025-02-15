import React from "react"; // Этот импорт обязателен для JSX
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
