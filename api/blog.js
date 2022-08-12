import { BASE_PATH } from '../utils/constants';

export async function getBlogsLanding() {
  try {
    const url = `${BASE_PATH}/api/blogs?sort[0]=createdAt&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getBlogs() {
  try {
    const url = `${BASE_PATH}/api/blogs?populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getBlogByUrlApi(path) {
  try {
    const url = `${BASE_PATH}/api/blogs?filters[slug][$eq]=${path}&populate=*`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}