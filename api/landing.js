import { BASE_PATH } from '../utils/constants';

export async function getLandingData() {
  try {
    const url = `${BASE_PATH}/api/landing`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}