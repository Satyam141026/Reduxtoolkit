import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';


/* const rootSlice=createSlice({
  name:'mySlice',
  initialState:{
    value:'satyam'
  },
  reducers:{
    showData:function(state, action){
     state.value = action.payload;
  }
  }

}) */
/* export const {showData}=rootSlice.actions

let store=configureStore({
  reducer:{
    rootReducer:rootSlice.reducer

  }
}
) */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
  

  
   
  </React.StrictMode>
);
