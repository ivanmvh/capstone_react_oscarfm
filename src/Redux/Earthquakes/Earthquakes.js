import { createAsyncThunk } from '@reduxjs/toolkit';

// Consts
const GET_FEATURES = 'GET_FEATURES';
const GET_QUAKES = 'GET_QUAKES';

// console.log(todayFormat);
// console.log(yesterdayFormat);

// Reducer
export function earthquakeReducer(state = [], action) {
  switch (action.type) {
    case `${GET_QUAKES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

export function featureReducer(state = [], action) {
  switch (action.type) {
    case `${GET_FEATURES}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 3);

const todayFormat = new Date(today).toLocaleDateString(
  'en-ZA',
);

const yesterdayFormat = new Date(yesterday).toLocaleDateString(
  'en-ZA',
);

yesterday.toLocaleDateString();

const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${yesterdayFormat}&endtime=${todayFormat}&minmagnitude=5`;

// Actions
export const getinfoquakes = createAsyncThunk(GET_QUAKES, async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.features;
});

export const getinfofeature = createAsyncThunk(GET_FEATURES, async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.metadata;
});
