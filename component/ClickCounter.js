import React from "react";

export default class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  incrmentCounter = () => {
    this.setState((preveState) => ({ count: preveState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button type="button" onClick={this.incrmentCounter}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}
