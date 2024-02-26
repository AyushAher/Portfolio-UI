import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export default function AxiosInstance(): AxiosInstance {
  var config: CreateAxiosDefaults = {
    baseURL: "https://ayush.ramson-developers.com",
  };
  return axios.create(config);
}
