import * as actTypes from "../../constants/actionTypes";

const initState = {};

const reducer = (state = initState, action) => {
  var { payload } = action;
  switch (action.type) {
    case actTypes.SET_LOCATION_SUCCESS:
      state = { lat: payload.location.lat, lng: payload.location.lng };
      return { ...state };
    case actTypes.SET_LOCATION_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
