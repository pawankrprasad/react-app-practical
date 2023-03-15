import { useState } from "react";

const AddExpense = (props) => {

    const defaultExpense = { title: "", amount: "", date: "" }

    const [expnese, setExpense] = useState(defaultExpense)

    const onClickHandler = (event) => {
        event.preventDefault();
        props.onSubmit(expnese);
        setExpense(defaultExpense)
    }

    const handleInputChange = (event, field) => {
        setExpense((prevState) => ({ ...prevState, [field]: event.target.value }))
    }
    
   


    return (
        <div className="expense_add_expense">
            <form onSubmit={onClickHandler} >
                Title <input type="text" onChange={(e) => handleInputChange(e, 'title')} value={expnese.title} required></input>
                Amount <input type="number" onChange={(e) => handleInputChange(e, 'amount')} value={expnese.amount} required></input>
                Date <input type="date" onChange={(e) => handleInputChange(e, 'date')} value={expnese.date} required></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default AddExpense;

