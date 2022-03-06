import React from "react";

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
      <>
        <h1>Date: {date.toLocaleTimeString(locale)}</h1>
        {/* <button type="button" onClick={this.handleClick}>
          Click Here
        </button> */}

        <button type="button" onClick={() => this.handleClick("en-US")}>
          Click Here
        </button>

        {/* <button type="button" onClick={this.handleClick.bind(this, "en-US")}>
          Click Here
        </button> */}
      </>
    );
  }
}

export default Clock;
