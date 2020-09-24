import * as actTypes from "../constants/actionTypes";
import { take, fork, call, put, select } from "redux-saga/effects";
import * as locationAction from "../store/actions/location";
import {
  getWeatherByGeographicFail,
  getWeatherByGeographicSuccess,
} from "../store/actions/weather";
import { getWeatherByGeographic } from "../apis/openweathermap";

const getUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve({ location, status: 200 }),
      (error) => reject({ error, status: 404 })
    );
  });

function* watchGetCurrentLocation() {
  yield take(actTypes.SET_CURRENT_LOCATION);
  var res = yield call(getUserLocation);
  if (res.status !== 200) {
    yield put(locationAction.setCurrentLocationFail(res.error));
    return;
  }
  yield put(
    locationAction.setCurrentLocationSuccess({
      lat: res.location.coords.latitude,
      long: res.location.coords.longitude,
    })
  );
  var resWeather = yield call(getWeatherByGeographic, {
    lat: res.location.coords.latitude,
    long: res.location.coords.longitude,
  });
  if (resWeather.status !== 200) {
    yield put(getWeatherByGeographicFail(resWeather.error));
    return;
  }
  var weather = {
    clouds: resWeather.data.clouds,
    temp: resWeather.data.main,
    description: resWeather.data.weather[0].description,
    id: resWeather.data.weather[0].id,
    main: resWeather.data.weather[0].main,
  };
  yield put(getWeatherByGeographicSuccess(weather));
}

function* rootSaga() {
  yield fork(watchGetCurrentLocation);
}

export default rootSaga;
