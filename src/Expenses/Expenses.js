import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

import './Expense.css'

const expenses = [
    {date: "03/08/2023" ,  title: "Shopping", amount:"$100"},
    {date: "03/09/2023" ,  title: "Movies", amount:"$50"},
    {date: "03/09/2023" ,  title: "Movies", amount:"$50"},
]


const Result = expenses.map(item=>{
    return (<ExpenseItem  expense={item}/>)
})

const onNewExpenseAdd = (expense) => {
    expenses.push(expense)
    console.log(expenses);
}

const Expenses = () =>{
    return(
        <>
        <AddExpense onExpenseAdd={onNewExpenseAdd}/>
        {Result}
        </>

    )
}

export default Expenses;