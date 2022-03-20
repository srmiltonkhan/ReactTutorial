import React from "react";

function Titile() {
  console.log("Rendering title ....");
  return <div>useCallback Hook tutorial</div>;
}

export default React.memo(Titile);
