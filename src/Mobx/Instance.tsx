const axios = require("axios");

const instance = axios.create({
  baseURL: "http://gickuwait-dev.com/surveyapi/api",
});

export default instance;
