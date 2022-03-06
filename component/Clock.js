import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props); // call the react props
    this.state = { data: new Date() };
  }

  componentDidMount(){
      setInterval(() => {
          this.setState({
            data: new Date()
          });
      }, 1000);
  }
  render() {
    return (
      <h1>Date: {this.state.data.toLocaleTimeString(this.props.locacle)}</h1>
    );
  }
}

export default Clock;
