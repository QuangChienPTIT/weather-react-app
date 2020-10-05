import * as actTypes from "../../constants/actionTypes";

export const setLocation = (location) => {
  return {
    type: actTypes.SET_LOCATION,
    payload: { location },
  };
};

export const setCurrentLocation = () => {
  return {
    type: actTypes.SET_CURRENT_LOCATION,
  };
};

export const setLocationSuccess = (location) => {
  return {
    type: actTypes.SET_LOCATION_SUCCESS,
    payload: { location },
  };
};

export const setLocationFail = (error) => {
  return {
    type: actTypes.SET_LOCATION_FAIL,
    payload: { error },
  };
};
