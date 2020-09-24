import React, { Component } from "react";
import cities from "./cities.json";
import { AutoComplete } from "antd";
import classes from "./style.css";
const { Option } = AutoComplete;

class SearchLocation extends Component {
    renderOptions = () => {
        return cities.map((item, index) => (
            <Option key={index} value={item.locationId}>
        {item.name}
      </Option>
    ));
};
render() {
  console.log(classes);
    return (
      <AutoComplete
        className={classes['searchLocation']}
        style={{ width: 300 }}
        placeholder="Enter location"
      >
        {this.renderOptions()}
      </AutoComplete>
    );
  }
}
export default SearchLocation;
