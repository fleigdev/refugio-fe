import { BASE_PATH } from '../utils/constants';

export async function getDogsLanding() {
  try {
    const url = `${BASE_PATH}/api/perros?sort[0]=createdAt&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDogs() {
  try {
    const url = `${BASE_PATH}/api/perros?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getDogByUrlApi(path) {
  try {
    const url = `${BASE_PATH}/api/perros?filters[slug][$eq]=${path}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}