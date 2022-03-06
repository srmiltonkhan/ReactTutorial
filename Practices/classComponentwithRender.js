import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  render() {
    return <h3>Dated: {new Date().toLocaleTimeString(this.props.locale)}</h3>;
  }
}


ReactDOM.render(<Clock locale = "bn-BD"/>, document.getElementById("root"));
