import React from "react";
import TemperatureInput from "./TemperatureInput";

import { convert, toCelsius, toFahrenheit } from "../lib/converter";

import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: " ",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temparature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temparature={farenheit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
