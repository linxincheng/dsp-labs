import axios from "axios";
import { Message } from "element-ui";

axios.defaults.timeout = 60000;

// http requst proxy
axios.interceptors.request.use(
  (request: any) => {
    console.log(request);
    return request;
  },
  (error: any) => {
    Message.error({
      message: "Request Timeout!",
    });
    return Promise.reject(error);
  }
);

// http response proxy
axios.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axios;
