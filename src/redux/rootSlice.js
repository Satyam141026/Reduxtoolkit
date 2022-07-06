import {  createSlice,createAsyncThunk } from '@reduxjs/toolkit';



const rootSlice=createSlice({
    name:'mySlice',
    initialState:{
      value:'satyam',
      userList:'ram'
    },
    reducers:{
      showData:function(state, action){
       state.value = action.payload;
    },
    showApi:function(state,action){
     // state.userList = action.payload.title;
      console.log(action.payload.title)
    } 
    
    },
    extraReducers:(builder)=>{
      builder
      .addCase(apiCall.pending,(state,action)=>{
        console.log('pendding')
      })
      .addCase(apiCall.fulfilled,(state,action)=>{
        state.userList=action.payload.title
        console.log('sucess',action.payload.id)
        console.log(state.userList,"state")
        
     
      })
      .addCase(apiCall.rejected,(state,action)=>{
        console.log('reject')
      })

    } 
  
  })
  //real method of api call redux toolkit
  export const  apiCall=createAsyncThunk('user/fetch',async(id)=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
    const data=await res.json();
    return data;
  })
  

  /* Method simple calling of api
  
  export const  apiCall=()=>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((data)=>{
      dispatch(showApi(data))

    })
  } */
    
             
  

  export const { showData , showApi} = rootSlice.actions;


  export default rootSlice.reducer;




/*   8602103090 */