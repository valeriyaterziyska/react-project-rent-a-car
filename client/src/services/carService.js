import { request } from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/cars";

export const getAll = async () => {
  const result = await request("GET", baseUrl);
  const cars = Object.values(result);
  
  return cars;
};
