import api from '../index';

const baseUrl = '/auth';

export const signInApi = (data) => {
  return { data: true };
  return api({
    method: 'post',
    url: `${baseUrl}/login`,
    data,
  });
};
export const getUserApi = (query) => {
  return api({
    method: 'get',
    url: `${baseUrl}/${query}`,
  });
};

export const updateUser = (data) => {
  return api({
    method: 'put',
    url: `${baseUrl}/`,
    data,
  });
};
export const changePassword = (data) => {
  return api({
    method: 'put',
    url: `${baseUrl}/changePassword`,
    data,
  });
};
export const resetPassword = (data) => {
  return api({
    method: 'post',
    url: `${baseUrl}/resetPassword`,
    data,
  });
};

export const sendPassowrdLink = (data) => {
  return api({
    method: 'post',
    url: `${baseUrl}/reset-link`,
    data,
  });
};
