
import { useState } from 'react';
import './App.css';
import Expenses from './Expenses/Expenses';


const Counter = () =>{

  const [num, setNum] = useState(0);

  const handleSyncCounter =()=> {
     
    setNum((prevState) => prevState+1)
  }

  const handleAsyncCounter =()=> {
    setTimeout(()=>{
      setNum((prevState) => prevState + 1)
    },5000)
  }

  return(
    <div>
      <div style={{fontSize:"26px"}}>{num}</div>
      <button onClick={handleSyncCounter}>Sync</button>
      <button onClick={handleAsyncCounter}>Async</button>
    </div>
  )
}


const App = () => {
    return (  
      <div className='main'>
        <Expenses/>
       </div>
    );
  }
  

export default App;
