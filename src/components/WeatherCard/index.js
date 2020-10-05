import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ReactComponent as WeatherOverlay } from "../../assets/imgs/WeatherOverlay.svg";
import WeatherAnimation from "../../assets/libs/WeatherAnimation";
import WeatherPanel from "../WeatherPanel";
import * as weatherType from "../../constants/weatherType";
import * as actWeather from "../../store/actions/weather";
import { jsUcfirst, getIconWeather } from "../../commons/Helper";
import PropTypes from "prop-types";
import "./style.css";

class WeatherCard extends Component {
  componentDidUpdate() {
    var { weather } = this.props;
    var weatherCode = weatherType.WEATHER_CODE[weather.main];
    if (weatherCode) {
      // this.weatherAni.makeWeather("thunder");
      this.weatherAni.makeWeather(weatherCode);
    }
  }
  componentDidMount() {
    var { weather } = this.props;
    var weatherCode = weatherType.WEATHER_CODE[weather.main];
    this.weatherAni = WeatherAnimation(weatherCode);
  }

  render() {
    var { weather } = this.props;
    return (
      <div className="container">
        <WeatherOverlay></WeatherOverlay>
        <div id="card" className="weather">
          <svg id="inner">
            <defs>
              <path
                id="leaf"
                d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
              />
            </defs>
            <circle id="sun" style={{ fill: "#F7ED47" }} cx="0" cy="0" r="50" />
            <g id="layer3"></g>
            <g id="cloud3" className="cloud"></g>
            <g id="layer2"></g>
            <g id="cloud2" className="cloud"></g>
            <g id="layer1"></g>
            <g id="cloud1" className="cloud"></g>
          </svg>
          <div className="details">
            <div className="left">
              <div className="temp">
                {parseInt(weather.temp)}
                <span>&ordm;</span>
              </div>
            </div>
            <div className="right">
              {/* <div id="date">{dateBuilder(new Date())}</div> */}
              <div className="icon">
                <img alt="weather-icon" src={getIconWeather(weather.icon)} />
              </div>
              <div id="summary">{jsUcfirst(weather.description)}</div>
            </div>
          </div>
          <div className="bottom">
            <WeatherPanel></WeatherPanel>
          </div>
        </div>
        <svg id="outer"></svg>
      </div>
    );
  }
}

WeatherCard.propsTypes = {
  description: PropTypes.string,
  temp: PropTypes.number,
  icon: PropTypes.string,
};

var mapStateToProps = (state) => {
  return {
    location: state.location,
    weather: state.weather,
  };
};
var mapDispatchToProps = (dispatch) => {
  return {
    actionsWeather: bindActionCreators(actWeather, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
