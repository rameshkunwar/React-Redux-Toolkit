import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchStringReducer from './searchStringSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        searchString: searchStringReducer,
    }
})