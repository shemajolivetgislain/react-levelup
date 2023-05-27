import "./App.css";
import React from "react";
import Tooglestatus from "./components/Tooglestatus";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div>

      <Tooglestatus title="Reusable component" content= "here is how make reusable component"/>
      <Login/>
      <Home/>

    </div>
  );
}

export default App;
