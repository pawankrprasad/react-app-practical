import { useState } from "react";

const AddExpense = (props) =>{

    const [title, setTitle ] =   useState("");
    const [amount, setAmount ] =   useState("");
    const [date, setDate ] =   useState("");

    const onClickHandler =() => {
    }
    
    const handleOnTitleChange = (event)=> {
        setTitle(event.target.value);
    }
    
    const handleOnAmountChange = (event)=> {
        setAmount(event.target.value);
    };
    
    
    const handleOnDateChange = (event)=> {
        setDate(event.target.value);
    };


    return(
        <div className="expense_add_expense">
          Title <input type="text" onChange={handleOnTitleChange} value={title}></input>
          Amount <input type="number" onChange={handleOnAmountChange} value={amount}></input>
          Date <input type="date" onChange={handleOnDateChange} value={date}></input>
           <button onClick={onClickHandler}>Add</button>
        </div>
    )
}

export default AddExpense;

