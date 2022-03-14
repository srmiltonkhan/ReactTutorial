import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
   

    render() {
      const { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          incrmentCounter={this.incrmentCounter}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
