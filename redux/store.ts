import { configureStore } from '@reduxjs/toolkit'

import navbarReducer from './reducers/navbarReducer'


const store = configureStore({
  reducer: {
    currentPage: navbarReducer,
  },
})


export default store

export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
