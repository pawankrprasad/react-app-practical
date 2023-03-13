function mainFunction(){

    const student = {
        name:"xyz",
        class:"10th",
        address:"delhi"
    };
    
    <add  student= {...student} />

    add(student);
    mul(student)

}



function add(props){
    console.log(props.address)
}

function mul(props){
    console.log(props.class)
}

mainFunction();




















const moment = require('moment');


// const expenses = [
//     {date: "08/03/2023" ,  title: "Shopping", amount:"$100"},
//     {date: "09/03/2023" ,  title: "Movies", amount:"$50"},
//     {date: "10/03/2023" ,  title: "Party", amount:"$120"},
//     {date: "11/03/2023" ,  title: "Party", amount:"$120"},
//     {date: "12/03/2023" ,  title: "Party", amount:"$60"},
//     {date: "13/03/2023" ,  title: "Party", amount:"$80"},
// ]

// const result = expenses.map(item =>{
//     return `Date ${item.date} title ${item.title} amount ${item.amount}`
// })

// console.log(result);

// console.log(moment( new Date("03/08/2023")).format('YYYY'))
// console.log(moment(new Date("03/08/2023")).format('MMMM'))
// console.log(moment(new Date("03/08/2023")).format("DD"))
