import * as apiConstants from "../constants/api";
import AxiosService from "../commons/AxiosService";

export const getWeatherByGeographic = (location) => {
  return AxiosService.get(
    `${apiConstants.API_WEATHER_URL}onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely,daily&units=metric&appid=${apiConstants.API_WEATHER_KEY}`
  );
};
