//custom axios

import axios from "axios";
class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess = (res) => {
    return res;
  };

  handleError = (err) => {
    return Promise.reject(err);
  };

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }

  add(url, data) {
    return this.instance.post(url, data);
  }

  delete(url) {
    return this.instance.delete(url);
  }

  update(url, data) {
    return this.instance.put(url, data);
  }
}

export default new AxiosService();
