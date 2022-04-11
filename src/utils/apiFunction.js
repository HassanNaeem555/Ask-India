import axios from './axios';

export const postApi = async (url, data, headers, navigate_url, navigate) => {
  try {
    const response = await axios.post(url, data, headers);
    if (response.status === 200) {
      if (navigate_url) {
        navigate(navigate_url);
        return;
      }
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

export const getApi = async (url, headers) => {
  try {
    const response = await axios.get(url, headers);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};
