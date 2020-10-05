import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentLocation } from "./store/actions/location";
import WeatherCard from "./components/WeatherCard";
import SearchLocation from "./components/SearchLocation";
import "./app.css";
class App extends Component {
  componentDidMount() {
    this.props.setCurrentLocation();
  }
  render() {
    return (
      <div className="App">
        <SearchLocation></SearchLocation>
        <WeatherCard></WeatherCard>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
var mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLocation: () => dispatch(setCurrentLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
