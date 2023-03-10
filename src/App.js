
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ExpenseItem from './Expenses/ExpenseItem';


const App = () => {
  return (  
    <div className='App-header'>
        <ExpenseItem/>
     </div>
  );
}

export default App;
