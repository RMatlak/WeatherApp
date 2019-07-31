import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
const APIKey = "9c59f3cbf258778651466a85d3161e0e";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value >= 1 || this.state.value === "00") {
      this.setState({
        value: ""
      });
      return alert("Please, write only letters");
    }
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Error " + response.status);
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            err: false,
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed
          }));
        })
        .catch(err => {
          console.log(err);
          this.setState({
            err: true,
            city: this.state.value
          });
        });
    }
  }

  render() {
    return (
      <>
        <Form
          value={this.state.value}
          handleInputChange={this.handleInputChange}
          handleCitySubmit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </>
    );
  }
}

export default App;
