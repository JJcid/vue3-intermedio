import axios from "axios";

const breakindBadApi = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",
});

export default breakindBadApi;
