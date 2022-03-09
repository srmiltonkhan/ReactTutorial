import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component {
  state = {
    temparature: "",
  };
  onChnageHandler = (e) => {
    this.setState({
      temparature: e.target.value,
    });
  };
  render() {
    const { temparature } = this.state;
    const { scale } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}</legend>
          <input
            type="text"
            value={temparature}
            onChange={this.onChnageHandler}
          />
        </fieldset>
      </div>
    );
  }
}
