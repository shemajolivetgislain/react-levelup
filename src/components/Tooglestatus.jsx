import React from "react";
import { useToogle } from "../hooks/ToogleHooks";
function Tooglestatus({title, content}) {
  const { status, toogleStatus } = useToogle();
  return (
    <center>
      <div className="container">
        {/* here means if status is true button will on else off */}
        <h2>{title}</h2>
        <button onClick={toogleStatus}>{status ? "ON" : "OFF"}</button>
        {/* and also here if status is true paragraph will displayed */}
        {status && <p>{content}</p>}
      </div>
    </center>
  );
}

export default Tooglestatus;
