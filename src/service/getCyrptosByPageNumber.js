import axios from "axios";
import { BASE_URL } from "../const";

export const getCyrptosByPageNumber = (data) => {
  console.log("burdayam", data);
  return axios.get(`${BASE_URL}page=${data}`);
};
