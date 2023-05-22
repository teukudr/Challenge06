import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/data/dataSlices'

export default configureStore({
  reducer: {
    data: dataReducer,
  },
})