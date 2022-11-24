import { configureStore } from '@reduxjs/toolkit';
import earthquakeReducer from './Earthquakes/Earthquakes';

const store = configureStore({
  reducer: {
    earthquakes: earthquakeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
