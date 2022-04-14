import axios from './axios';
import {base_url} from './url';

export const postApi = async (url, data, bearer_token) => {
  try {
    let response;
    if (bearer_token) {
      response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${bearer_token}`,
        },
      });
    } else {
      response = await axios.post(url, data);
    }
    if (response.status === 200) {
      if (response.data) {
        return response?.data;
      }
      return response;
    }
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const getApi = async (url, bearer_token) => {
  try {
    let response;
    if (bearer_token) {
      response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${bearer_token}`,
        },
      });
    } else {
      response = await axios.get(url);
    }
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};
export const putApi = async (url, data, headers) => {
  try {
    const response = await axios.put(url, data, headers);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

export const postApiFetch = async (url, data, bearer_token) => {
  try {
    let response = await fetch(base_url + url, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: `Bearer ${bearer_token}`,
      },
    });
    if (response.status === 200) {
      const result = await response.json();
      // if (result.data) {
      //   return result?.data;
      // }
      return result;
    }
    return result;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      return error;
    }
  }
};
