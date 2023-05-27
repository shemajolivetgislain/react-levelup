import "./App.css";
import { React, useState } from "react";
import Tooglestatus from "./components/Tooglestatus";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Input from "./components/Input";

function App() {
  const [hide, setHide] = useState(false);

  const hideComponent = () => setHide((previous) => !previous);
  return (
    <div>
      <Tooglestatus
        title="Reusable component"
        content="here is how make reusable component"
      />
      <Login />
      <button onClick={hideComponent}>
        {/* this if hide state is true then show else Hide */}
        {hide ? "Show" : "Hide"}
      </button>
      {/* <Input type="submit" value="Hide" onClick = {hideComponent}/> */}
      {hide && <Home />}
    </div>
  );
}

export default App;
