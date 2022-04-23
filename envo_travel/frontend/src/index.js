import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/app";

console.log(process.env.NODE_ENV);
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
