import React from "react";
import ReactDOM from "react-dom";

class Clock {
  print() {
    return <h3>Dated: {new Date().toLocaleTimeString("bn-BD")}</h3>;
  }
}

//call function
let classCompoent = new Clock();
ReactDOM.render(classCompoent.print(), document.getElementById("root"));
