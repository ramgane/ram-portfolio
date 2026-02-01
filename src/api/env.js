const ENV = process.env.REACT_APP_ENV || "local";

const CONFIG = {
  local: {
    BASE_URL: process.env.REACT_APP_APIBASE_URL,
    TIMEOUT: process.env.REACT_APP_API_TIMEOUT,
  },
  stage: {
    BASE_URL: process.env.REACT_APP_APIBASE_URL,
    TIMEOUT: process.env.REACT_APP_API_TIMEOUT,
  },
  prod: {
    BASE_URL: process.env.REACT_APP_APIBASE_URL,
    TIMEOUT: process.env.REACT_APP_API_TIMEOUT,
  },
};

export default CONFIG[ENV];
