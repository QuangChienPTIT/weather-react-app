import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentLocation } from "./store/actions/location";
import WeatherCart from "./components/WeatherCart";
import SearchLocation from "./components/SearchLocation";
import { Col, Row } from "antd";
import "./app.scss";
class App extends Component {
  componentDidMount() {
    this.props.setCurrentLocation();
  }
  render() {
    return (
      <div className="App">
        <Row>
          <Col
            span={12}
            offset={6}
            style={{ padding: "1rem", background: "#fff" }}
          >
            <SearchLocation></SearchLocation>
          </Col>
        </Row>
        <WeatherCart></WeatherCart>
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
