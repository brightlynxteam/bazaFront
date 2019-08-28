import { axios } from 'boot/axios';
import {
  getOneNewsUrl,
} from 'src/store/urls';

import onError from 'src/store/onError';


function login({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.post(loginUrl, data)
      .then((response) => {
        commit('setUser', response.data.data);

        resolve();
      })
      .catch(error => onError(error, reject));
  });
}

function getOneNews({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.post(getOneNewsUrl, data)
      .then((response) => {
        commit('getOneNews', response.data.data);

        resolve();
      })
      .catch(error => onError(error, reject));
  });
}

export {
  register,
  login,
  logout,
  checkUser,
};
