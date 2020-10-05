import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnixTime, getIconWeather } from "../../commons/Helper";
import "./style.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// const tabIcons = [
//   {
//     icon: "wi-thermometer-exterior",
//     id: 1,
//   },
//   {
//     icon: "wi-horizon-alt",
//     id: 2,
//   },
//   {
//     icon: "wi-rain",
//     id: 3,
//   },
// ];
class WeatherPanel extends Component {
  renderSelectDay = () => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var d = new Date();
    var currentDay = days[d.getDay()];

    // var options = days.map((day, index) => {
    //   return (
    //     <Option value={day} key={index}>
    //       {day}
    //     </Option>
    //   );
    // });
    //   <Select
    //   defaultValue={currentDay}
    //   style={{ width: 120 }}
    //   className="select-date"
    // >
    //   {options}
    // </Select>
    return <p style={{ margin: 0 }}>{currentDay}</p>;
  };

  renderTempItem = (hourlyWeather) => {
    var result;
    result = hourlyWeather.map((item, index) => {
      return (
        <div className="temp-item" key={index}>
          <p>{getUnixTime(item.dt).hours}h</p>
          <img alt="weather-icon" src={getIconWeather(item.weather[0].icon)} />
          <span>{parseInt(item.temp)}&ordm;</span>
        </div>
      );
    });
    return result;
  };

  render() {
    const { weather } = this.props;
    const tabs = [];
    const tabPanels = [];
    tabs.push(
      <Tab key="temp">
        <span
          className="iconify"
          data-icon="wi-thermometer-exterior"
          data-inline="false"
        ></span>
      </Tab>
    );
    tabPanels.push(
      <TabPanel key="temp">
        <div className="temp-panel">
          <div className="temp-item">
            <p>Now</p>
            <img alt="weather-icon" src={getIconWeather(weather.icon)} />
            <span>{parseInt(weather.temp)}&ordm;</span>
          </div>
          {this.renderTempItem(weather.hourly)}
        </div>
      </TabPanel>
    );

    // tabIcons.map((item, index) => {
    //   var { icon, id } = item;
    // });
    return (
      <Tabs>
        <div className="weather-panel">
          <div className="weather-panel-left">{this.renderSelectDay()}</div>
          <div className="weather-panel-right">
            <TabList className="weather-panel-tab">{tabs}</TabList>
          </div>
        </div>
        {tabPanels}
      </Tabs>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps, null)(WeatherPanel);
