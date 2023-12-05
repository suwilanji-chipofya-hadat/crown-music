import { configureStore } from '@reduxjs/toolkit';

import { crownCoreApi } from './services/crownCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [crownCoreApi.reducerPath]: crownCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(crownCoreApi.middleware),
});
