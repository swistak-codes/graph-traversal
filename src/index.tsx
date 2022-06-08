import React from "react";
import ReactDOM from "react-dom/client";
import { GraphTraversal } from "./graph-traversal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GraphTraversal type="DFS" />
  </React.StrictMode>
);
