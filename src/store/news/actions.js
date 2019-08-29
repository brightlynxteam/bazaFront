import { axios } from 'boot/axios';

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

export {
  register,
  login,
  logout,
  checkUser,
};
