import get from "lodash/get";
import axios from 'axios';

// Change base url to API address in production build
const app = axios.create ({
    baseURL: "http://localhost:5000"
});

app.interceptors.response.use(
    response => response,
    error => {
      const err = get(error, ["response", "data", "err"]);
      return Promise.reject(err ? err : error.message);
    }
  );
  
export default app;