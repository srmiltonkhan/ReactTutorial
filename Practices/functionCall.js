import React from "react";
import ReactDOM from "react-dom";

function clock({ local }) {
  return <h3>dd: {new Date().toLocaleString("bn-BdD")}</h3>;
}

//call function
ReactDOM.render(<clock local="bn-BD" />, document.getElementById("root"));
