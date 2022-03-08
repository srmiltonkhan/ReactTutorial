import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    text: "Java is awesome",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value, //get value from form text file those name
    // });

    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing to be here");
    }
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { title, text, library, isAwesome } = this.state;
    console.log(title + text + library + isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {/* <input type="text" value={null}/> */}

          <input
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}
