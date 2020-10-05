import * as apiConstants from "../constants/api";
import AxiosService from "../commons/AxiosService";
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    AxiosService.get(`${apiConstants.API_FREEGEOIP_URL}`).then((res) => {
      resolve({
        lat: res.data.latitude,
        lng: res.data.longitude,
        status: res.status,
      });
    });
  });
};
