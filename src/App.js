import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RoutesPath/>
    </BrowserRouter>
  );
}

export default App;
