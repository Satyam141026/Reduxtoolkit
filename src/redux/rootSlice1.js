import {  createSlice } from '@reduxjs/toolkit';


const rootSlice=createSlice({
    name:'mySlice',
    initialState:{
      value:'satyam'
    },
    reducers:{
      showData:function(state, action){
       state.value = action.payload;
    },
    showApi:function(state,action){
     // state.value = action.payload.title;
      console.log(action.payload.title)
    }
    
    }
  
  })

  export const  apiCall=()=>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((data)=>{
      dispatch(showApi(data))

    })
  }
    
             
  }

  export const { showData , showApi} = rootSlice.actions;


  export default rootSlice.reducer;