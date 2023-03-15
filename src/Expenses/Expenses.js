import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

import './Expense.css'
import { useState } from "react";


const NoExpenses = ()=>(<h1>No Expenses</h1>)

const Expenses = () => {

    const [expenses, setExpenses] = useState([])
    const onNewExpenseAdd = (expense) => setExpenses([...expenses, expense])

    return (
        <>
            <AddExpense onSubmit={onNewExpenseAdd} />
            { expenses.length === 0 ? <NoExpenses/> : expenses.map(item => <ExpenseItem expense={item} />) }

        </>

    )
}

export default Expenses;