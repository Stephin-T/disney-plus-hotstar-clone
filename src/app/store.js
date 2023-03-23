import { configureStore } from '@reduxjs/toolkit';

import userReducer from "../features/user/userSlice";

import movieReducer from "../features/movie/movieSlice";



   const reducer ={
     
    user : userReducer ,
    movie: movieReducer
  };

  const store = configureStore({

    reducer: reducer,

  });



// Store has all of the default middleware added, _plus_ the logger middleware

export default store;