import sendRequest from "./send-request";
const BASE_URL = '/api/beers';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export function add(beerData) {
  return sendRequest(`${BASE_URL}/${beerData._id}`, 'POST');
}

export async function getAllMyBeers() {
  return sendRequest(`${BASE_URL}/myId`);
}
