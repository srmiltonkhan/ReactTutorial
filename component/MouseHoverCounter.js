import React from "react";

class MouseHoverCounter extends React.Component {
  state = {
    count: 0,
  };

  MouseHoverCounter = () => {
    this.setState((preveState) => ({ count: preveState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.MouseHoverCounter}>You have {count} times</h1>
      </div>
    );
  }
}

export default MouseHoverCounter;
