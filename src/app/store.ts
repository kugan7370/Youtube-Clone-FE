import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import SidebarReducers from "../features/Slicer/SidebarSlicer";
import UserReducers from "../features/Slicer/UserSlicer";
import VideoReducers from "../features/Slicer/VideoSlilcer";
import CommentReducers from "../features/Slicer/CommentSlicer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({


  user: UserReducers,
  sidebar: SidebarReducers,
  video: VideoReducers,
  comment: CommentReducers

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
