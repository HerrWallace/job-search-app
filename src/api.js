'use strict';

import axios from 'axios';

const source = 'https://startup-summer-2023-proxy.onrender.com/2.0';

// params
const login = 'login=sergei.stralenia@gmail.com';
const password = 'password=paralect123';
const clientId = 'client_id=2356';
const clientSecret =
  'client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
const hr = 'hr=0';

// headers
const xSecretKey = 'GEU4nvd3rej*jeh.eqp';
const xApiAppId =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

export const getCatalogue = async () => {
  const response = await axios.get(`${source}/catalogues/`, {
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': xSecretKey,
    },
  });

  return response.data.map((item) => {
    return {
      value: item.key,
      label: item.title_trimmed,
    };
  });
};

const getToken = async () => {
  const response = await axios.get(
    `${source}/oauth2/password/?${login}&${password}&${clientId}&${clientSecret}&${hr}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': xSecretKey,
        'x-api-app-id': xApiAppId,
      },
    }
  );
  localStorage.setItem('access_token', response.data.access_token);
  console.log('Token is asked.(getToken)');
  return response.data;
};

export const getVacancies = async () => {
  if (!localStorage.getItem('access_token')) {
    getToken();
  }

  const response = await axios.get(`${source}/vacancies/`, {
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': xSecretKey,
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'x-api-app-id': xApiAppId,
    },
  });
  console.log(response.data);
  return response.data;
};