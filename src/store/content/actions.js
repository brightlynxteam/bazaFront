import axios from 'axios';
import { servicesUrl, getOneNewsUrl } from 'src/store/urls';
// import { getOneNewsUrl } from 'src/store/urls';


import onError from 'src/store/onError';

function getServices({ commit }) {
  return new Promise((resolve, reject) => {
    axios.post(servicesUrl)
      .then((response) => {
        commit('setServices', response.data.data);
        resolve();
      })
      .catch(error => onError(error, reject));
  });
}

function getOneNews({ commit }, data) {
  return new Promise((resolve, reject) => {
    console.log('GGGG  data=', data);
    axios.post(getOneNewsUrl, data)
      .then((response) => {
        console.log('resp=', response.data);
        commit('setOneNews', response.data);
        resolve();
      })
      .catch(error => onError(error, reject));
  });
}

export {
  getServices,
  getOneNews,
};
