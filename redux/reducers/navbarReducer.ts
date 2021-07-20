import { createReducer } from '@reduxjs/toolkit'

import { changeCurrentPage } from '../actions/navbarActions'


const navbarReducer = createReducer('', builder => {
  //builder
  //  .addCase(changeCurrentPage, (state, action) => {
  //    return action.payload
  //  })
})


export default navbarReducer
