import React from "react";
import axios from "axios";

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";

axios.defaults.baseURL = "http://localhost:5000";

const http = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

const getData = () => {
  return http.get("/usersData");
};

const addData = (data) => {
  return http.post("/api/user/register/", data);
};

const deleteData = (id) => {
  return http.delete(`/usersData/${id}`, id);
};

export default http;
export { getData, addData, deleteData };
