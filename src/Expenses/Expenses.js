import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

import './Expense.css'

const expenses = [
    {date: "03/08/2023" ,  title: "Shopping", amount:"$100"},
    {date: "03/09/2023" ,  title: "Movies", amount:"$50"},
]

const onNewExpenseAdd = (expense) => {
    expenses.push(expense)
    console.log(expenses);
}

const Expenses = () =>{
    return(
        <>
        <AddExpense onExpenseAdd={onNewExpenseAdd}/>
        {
            expenses.map((expense, index) => {
                return(<ExpenseItem key={index} expense = {expense} />)
            })
        }
        </>

    )
}

export default Expenses;