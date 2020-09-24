import * as actTypes from "../../constants/actionTypes";

export const getWeatherByGeographic = () => {
  return {
    type: actTypes.GET_WEATHER_BY_GEOGRAPHIC,
  };
};

export const getWeatherByGeographicSuccess = (weather) => {
  return {
    type: actTypes.GET_WEATHER_BY_GEOGRAPHIC_SUCCESS,
    payload: { weather },
  };
};

export const getWeatherByGeographicFail = (error) => {
  return {
    type: actTypes.GET_WEATHER_BY_GEOGRAPHIC_FAIL,
    payload: { error },
  };
};
