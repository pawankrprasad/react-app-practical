import moment from 'moment';



const ExpenseDate = ({date}) => {
    return (
        <div className='expense_item_date boarder_white radius_10'>
            <span> {moment(new Date(date)).format('MMMM')} </span>
            <span>{moment(new Date(date)).format('DD')}</span>
            <span className='expense_item_date_day'>{moment(new Date(date)).format('YYYY')}</span>
        </div>
    )
}



const ExpenseItem = ({ expense }) => {
    return (
        <>
            <div className="expense_item_strip radius_10 padding_10 boarder_white">
                <ExpenseDate date={expense.date}/>
                <div className='expense_item_title'> {expense.title}</div>
                <div className='expense_item_amount boarder_white radius_10 padding_10'>${expense.amount}</div>
            </div>  
     </>
    )
}

export default ExpenseItem