import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { apiCall, showData } from './redux/rootSlice';

import { useEffect } from 'react';

function App() {

  let show=useSelector((state)=>{
    console.log(state);
    return state
   })
   let dispatch=useDispatch() 
   
  useEffect(()=>{
    dispatch(apiCall())
  
  })
   function changeName(){
    dispatch(showData('jaya'))
    //dispatch(showApi())
  }
  
  
    return (
      <div className="App">
   {show.rootReducer.value}
  <button onClick={changeName}>changeName</button> 
  
  
      </div>
    );
  
    }
export default App;
