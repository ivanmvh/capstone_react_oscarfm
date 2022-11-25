import { configureStore } from '@reduxjs/toolkit';
import { earthquakeReducer, featureReducer } from './Earthquakes/Earthquakes';

const store = configureStore({
  reducer: {
    feature: featureReducer,
    earthquakes: earthquakeReducer,
  },
});

export default store;
