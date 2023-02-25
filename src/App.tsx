import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// importing components
import Grid from "./component/grid/Grid";
import Input from "./component/input";
function App() {
  let headerContent = [
    { item: { name: "first name", variant: "col-5", style: {} }, index: 1 },
    { item: { name: "last name", variant: "col-5", style: {} }, index: 2 },
    { item: { name: "age", variant: "col-2", style: {} }, index: 3 },
  ];
  let gridContent = [
    { item: { firstName: "sina", lasName: "saadat", age: 28 }, index: 1 },
    { item: { firstName: "dariush", lasName: "nadaf", age: 28 }, index: 1 },
    { item: { firstName: "navid", lasName: "barsalari", age: 32 }, index: 1 },
  ];
  return (
    <div className="App w-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100 h-auto d-flex align-items-center justify-content-center px-5">
        <Grid headerContent={headerContent} gridContent={gridContent} />
      </div>
    </div>
  );
}

export default App;
