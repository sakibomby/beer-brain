import sendRequest from "./send-request";
const BASE_URL = '/api/styles';

export async function getAll() {
  return sendRequest(BASE_URL);
}
