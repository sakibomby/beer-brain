import sendRequest from "./send-request";
const BASE_URL = '/api/beers';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export function add(beerData) {
  return sendRequest(BASE_URL, 'POST', beerData);
}

export async function getAllMyBeers() {
  return sendRequest(`${BASE_URL}/myId`);
}

export async function removeMyBeer(beerId) {
  return sendRequest(`${BASE_URL}/${beerId}`, 'DELETE');
}