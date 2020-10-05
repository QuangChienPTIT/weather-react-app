import * as actTypes from "../constants/actionTypes";
import { take, fork, call, put } from "redux-saga/effects";
import * as locationAction from "../store/actions/location";
import {
  getWeatherByGeographicFail,
  getWeatherByGeographicSuccess,
} from "../store/actions/weather";
import { getWeatherByGeographic } from "../apis/openweathermap";
import { getUserLocation } from "../apis/freegeoip";

// const getUserLocation = () =>
//   new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (location) => resolve({ location, status: 200 }),
//       (error) => reject({ error, status: 404 })
//     );
//   });

function* watchSetCurrentLocation() {
  while (true) {
    yield take(actTypes.SET_CURRENT_LOCATION);
    var res = yield call(getUserLocation);
    if (res.status !== 200) {
      yield put(locationAction.setLocationFail(res.error));
      return;
    }
    yield put(
      locationAction.setLocation({
        lat: res.lat,
        lng: res.lng,
      })
    );
  }
}
function* watchSetLocation() {
  while (true) {
    var resTake = yield take(actTypes.SET_LOCATION);
    var { location } = resTake.payload;
    if (location) {
      yield put(
        locationAction.setLocationSuccess({
          lat: location.lat,
          lng: location.lng,
        })
      );
      var resWeather = yield call(getWeatherByGeographic, {
        lat: location.lat,
        lng: location.lng,
      });
      if (resWeather.status !== 200) {
        yield put(getWeatherByGeographicFail(resWeather.error));
        return;
      }
      var currentWeather = resWeather.data.current;
      var hourlyWeather = resWeather.data.hourly.slice(1, 5);
      var weather = {
        clouds: currentWeather.clouds,
        temp: currentWeather.temp,
        icon: currentWeather.weather[0].icon,
        description: currentWeather.weather[0].description,
        id: currentWeather.weather[0].id,
        main: currentWeather.weather[0].main,
        time: currentWeather.dt,
        hourly: hourlyWeather,
      };
      yield put(getWeatherByGeographicSuccess(weather));
    }
  }
}

function* rootSaga() {
  yield fork(watchSetLocation);
  yield fork(watchSetCurrentLocation);
}

export default rootSaga;
