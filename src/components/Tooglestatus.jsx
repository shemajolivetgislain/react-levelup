import React from "react";
import { useToogle } from "../hooks/ToogleHooks";
function Tooglestatus() {
  const { status, toogleStatus } = useToogle();
  return (
    <div className="container">
      {/* here means if status is true button will on else off */}
      <button onClick={toogleStatus}>{status ? "ON" : "OFF"}</button>
      {/* and also here if status is true paragraph will displayed */}
      {status && <p>Click the button to change the status</p>}
    </div>
  );
}

export default Tooglestatus;
