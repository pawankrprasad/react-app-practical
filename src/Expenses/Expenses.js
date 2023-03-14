import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

import './Expense.css'
import { useState } from "react";


const Expenses = () =>{

   const [expenses, setExpenses] =  useState([])
   const onNewExpenseAdd = (expense) => setExpenses([...expenses, expense])

    return(
        <>
        <AddExpense onSubmit = {onNewExpenseAdd} />
        {expenses.map(item=>{
            return (<ExpenseItem  expense={item}/>)
        })}
        </>

    )
}

export default Expenses;