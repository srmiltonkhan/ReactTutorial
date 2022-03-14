import React from "react";
import ClickCounter from "./component/ClickCounter";
import Counter from "./component/Counter";
import Section from "./component/Section";
import themeContext from "./contexts/themeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <Counter>
          {(count, incrmentCounter) => (
            <ClickCounter count={count} incrmentCounter={incrmentCounter} />
          )}
        </Counter>
        <themeContext.Provider value={{ theme: theme }}>
          <Section/>
        </themeContext.Provider>
      </div>
    );
  }
}
