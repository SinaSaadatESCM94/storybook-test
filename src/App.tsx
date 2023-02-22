import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/input";
function App() {
  const [email, setEmail] = useState();
  return (
    <div className="App w-100 vh-100 d-flex align-items-center justify-content-center">
      <fieldset className="w-25 d-flex align-items-center justify-content-center">
        <Input
          inputId="email"
          inputName="email"
          // inputValue={email}
          inputLabel="email"
          inputType="email"
          // setValue={setEmail}
        />
      </fieldset>
    </div>
  );
}

export default App;
