import React, { Component } from "react";
import cities from "./cities.json";
import { AutoComplete } from "antd";
import { connect } from "react-redux";
import classes from "./style.scss";
import { setLocation } from "../../store/actions/location";

const { Option } = AutoComplete;

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
class SearchLocation extends Component {
  renderOptions = () => {
    return cities.map((item, index) => {
      if (item.capital === "admin" || item.capital === "primary") {
        return (
          <Option key={index} value={item.admin} lat={item.lat} lng={item.lng}>
            {item.admin}
          </Option>
        );
      }
      return '';
    });
  };

  filterOption = (inputValue, option) => {
    return (
      removeAccents(option.value.toUpperCase()).indexOf(
        removeAccents(inputValue.toUpperCase())
      ) !== -1
    );
  };
  onSelect = (value, option) => {
    var { lat, lng } = option;
    this.props.setLocation({ lat, lng });
  };
  render() {
    return (
      <AutoComplete
        className={classes.SearchLocation}
        style={{ width: 300 }}
        placeholder="Enter location"
        filterOption={this.filterOption}
        onSelect={this.onSelect}
        allowClear={true}
        notFoundContent="Not Found"
      >
        {this.renderOptions()}
      </AutoComplete>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => dispatch(setLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(SearchLocation);
