import { IUserResponse } from "./../interfaces/user.type";
import {
  GIT_AUTH_TOKEN,
  API_SEARCH_USERS,
} from "./../constants/app.config.constants";
import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

axios.interceptors.request.use(
  function (config: any) {
    const token: string = GIT_AUTH_TOKEN;
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `token ${token}`;
    return config;
  },
  function (err: any) {
    return Promise.reject(err);
  }
);

export const gitHubServices = {
  fetchUserData,
  fetchRepoData,
};

async function fetchUserData(api: string) {
  const apiUrl: string = process.env.API_URL;
  const url: string = apiUrl + api;
  return axios({
    method: "get",
    url: url,
    timeout: 4000,
  })
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch((error: any) => {
      return handleError(error);
    });
}

async function fetchRepoData(api: string) {
  const apiUrl: string = process.env.API_URL;
  const url: string = apiUrl + api;
  return axios({
    method: "get",
    url: url,
    timeout: 4000,
  })
    .then((response: any) => {
      console.log(response);
      return handleResponse(response);
    })
    .catch((error: any) => {
      return handleError(error);
    });
}
