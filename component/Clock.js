import React from "react";
import Button from "./Button";
class Clock extends React.Component {
  constructor(props) {
    super(props); // call the react props
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  handleClick = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  render() {
    const { date, locale } = this.state;

    return (
      <div>
        <h1>Date: {date.toLocaleTimeString(locale)}</h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false}  enable = {false}/>
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show={true} enable = {true}/>
        )}
      </div>
    );
  }
}

export default Clock;
