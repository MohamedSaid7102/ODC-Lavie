import { configureStore } from '@reduxjs/toolkit';
import navbarSlice from '@redux/features/navbarSlice';
import calloutSlice from '@redux/features/calloutSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    callout: calloutSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
