import * as apiConstants from "../constants/api";
import AxiosService from "../commons/AxiosService";

export const getWeatherByGeographic = (location) => {
  return AxiosService.get(
    `${apiConstants.API_WEATHER_URL}weather?lat=${location.lat}&lon=${location.long}&units=metric&lang=vi&appid=${apiConstants.API_WEATHER_KEY}`
  );
};
