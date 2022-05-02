import axios from "axios";

const url = `http://localhost:8080/meli`;

export const load = search => axios.get(`${url}?s=${search}`);
