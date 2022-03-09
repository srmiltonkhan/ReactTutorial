import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default function TemperatureInput({
  temparature,
  scale,
  onTemperatureChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input
          type="text"
          value={temparature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
