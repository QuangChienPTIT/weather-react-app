import * as actTypes from "../../constants/actionTypes";

export const setCurrentLocation = () => {
  return {
    type: actTypes.SET_CURRENT_LOCATION,
  };
};

export const setCurrentLocationSuccess = (location) => {
  return {
    type: actTypes.SET_CURRENT_LOCATION_SUCCESS,
    payload: { location },
  };
};

export const setCurrentLocationFail = (error) => {
  return {
    type: actTypes.SET_CURRENT_LOCATION_FAIL,
    payload: { error },
  };
};
