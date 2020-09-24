import * as actTypes from "../../constants/actionTypes";

const initState = {};

const reducer = (state = initState, action) => {
  var { payload } = action;
  switch (action.type) {
    case actTypes.SET_CURRENT_LOCATION_SUCCESS:
      state = { lat: payload.location.lat, long: payload.location.long };
      return { ...state };
    case actTypes.SET_CURRENT_LOCATION_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
