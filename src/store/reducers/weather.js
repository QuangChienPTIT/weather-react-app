import * as actTypes from "../../constants/actionTypes";

const initState = {
  clouds: {},
  temp: 0,
  description: "",
  main: "",
  id: 0,
  hourly:[]
};

const reducer = (state = initState, action) => {
  var { payload } = action;
  switch (action.type) {
    case actTypes.GET_WEATHER_BY_GEOGRAPHIC_SUCCESS:
      state = { ...payload.weather };
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
