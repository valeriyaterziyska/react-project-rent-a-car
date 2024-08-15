import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/cars";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  const cars = Object.values(result);

  return cars;
};

export const create = async (data) => {
  const result = await request.post(baseUrl, data);
  console.log(result);
  return result;
};