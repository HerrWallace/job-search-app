'use strict';

import axios from 'axios';

// const source = 'https://startup-summer-2023-proxy.onrender.com/2.0';
const source2 = 'https://startup-summer-proxy-production.up.railway.app/2.0';

// token params
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
  const response = await axios.get(`${source2}/catalogues/`, {
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
    `${source2}/oauth2/password/?${login}&${password}&${clientId}&${clientSecret}&${hr}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': xSecretKey,
        'x-api-app-id': xApiAppId,
      },
    }
  );
  localStorage.setItem('access_token', response.data.access_token);
  return response.data;
};

export const getVacancies = async (...params) => {
  const [keyword, catalogueKey, valueFrom, valueTo, activePage = 1, id] = [
    ...params,
  ];

  const paramKeyword = keyword ? `&keyword=${keyword}` : '';
  const catalogues = catalogueKey ? `&catalogues=${catalogueKey}` : '';
  const value_from = valueFrom ? `&payment_from=${valueFrom}` : '';
  const value_to = valueTo ? `&payment_to=${valueTo}` : '';
  const noAgreement = valueFrom || valueTo ? `&no_agreement=1` : '';
  const vacId = id ? `&id_vacancy=${id}` : '';

  const paramSource = `${source2}/vacancies/?published=1&page=${
    activePage - 1
  }&count=4${paramKeyword}${catalogues}${value_from}${value_to}${noAgreement}${vacId}`;


  if (!localStorage.getItem('access_token')) {
    await getToken();
  }

  const response = await axios.get(paramSource, {
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': xSecretKey,
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'x-api-app-id': xApiAppId,
    },
  });
  return response.data;
};

export const getSingleVacancy = async (id) => {
  const paramSource = `${source2}/vacancies/${id}`;

  if (!localStorage.getItem('access_token')) {
    await getToken();
  }

  const response = await axios.get(paramSource, {
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': xSecretKey,
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'x-api-app-id': xApiAppId,
    },
  });
  return response.data;
};

export const getFavVacancies = async (ids) => {
  let fullIdParam = '?';
  ids.forEach((id) => {
    fullIdParam = fullIdParam + `ids[]=${id}&`
  });
  const paramSource = `${source2}/vacancies/${fullIdParam}`;


  if (!localStorage.getItem('access_token')) {
    await getToken();
  }

  const response = await axios.get(paramSource, {
    headers: {
      'Content-Type': 'application/json',
      'x-secret-key': xSecretKey,
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'x-api-app-id': xApiAppId,
    },
  });
  return response.data;
};
