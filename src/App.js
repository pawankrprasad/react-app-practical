
import './App.css';
import Expenses from './Expenses/Expenses';

// function MainFunction(){
//   const student = {
//     name:"Student Name",
//     class:"10th",
//     address:"Delhi"
// };


//   return(
//     <div>
//       <h1>Main Function</h1>
//       <Address {...student}/>
//       <Name {...student}/>
//     </div>
//   )
// }

// function Address(props){
//   return(
//     <h1>{props.address}</h1>
//   )
// }

// function Name(props){
//   return(
//     <h1>{props.name}</h1>
//   )
// }







// const App = () => {
//   return (  
//     <div className='main'>
//       <MainFunction/>
//      </div>
//   );
// }


const App = () => {
    return (  
      <div className='main'>
        <Expenses/>
       </div>
    );
  }
  

export default App;
