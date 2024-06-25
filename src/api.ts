import axios from "axios";

const openSeaApi = axios.create({
  baseURL: "https://api.opensea.io/api/v2/",
  headers: {
    accept: "application/json",
  },
});

export default openSeaApi;
