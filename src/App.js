
import { useState } from 'react';
import AppClasses from './App.module.css';
import Expenses from './Expenses/Expenses';
import Button from './UI/Button';


const Box = () => {
  return(
    <div className='box'>
    Box
  </div>
  )
}



const Card = (props) => {
  return(
  <div className='card'>
    <div>
      {props.children}
    </div>
    
  </div>
)
  }





// const App = () => {
//     return (  
//       <div className={AppClasses.main}>
//         <Counter className='card_red' />
//         <Counter className='card_green' />
//        </div>
//     );
//   }

const App = () => {
  return (  
    <div className={AppClasses.main}>
      <Card>
        <Button variant="primary" onClick={()=> alert("Add Button Clicked")}> <i>Add</i>  </Button>
        <Button variant="success" onClick={()=> alert("Save Button Clicked")}>Save</Button>
        <Button variant="danger" onClick={()=> alert("Delete Button Clicked")}>Delete</Button>
      </Card>
      </div>
  );
}
  

export default App;
