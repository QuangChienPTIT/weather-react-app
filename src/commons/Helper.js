import { API_WEATHER_ICON_URL } from "../constants/api";

export const getUnixTime = (timestap) => {
  var date = new Date(timestap * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  var result = {
    date: date,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  return result;
};

export const jsUcfirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const getIconWeather = (icon) => {
  if (typeof icon != "undefined") {
    return `${API_WEATHER_ICON_URL}${icon}@2x.png`;
  }
};
