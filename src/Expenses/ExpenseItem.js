import './Expense.css'

const ExpenseItem = () => {
    return (
        <div className="expense_item_strip">
            <div className='expense_item_date'>
                <span>Auguest</span>
                <span>2023</span>
                <span className='expense_item_date_day'>25</span>
            </div>
            <div className='expense_item_title'>Shopping</div>
            <div className='expense_item_amount'>$100</div>
        </div>    
    )
}

export default ExpenseItem