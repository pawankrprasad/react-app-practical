

const a = [1,2,3];
const b= [6,7,8];

const c = [...a, ...b];

console.log(c);

const student = {
    name:"xyx",
    class:"10th",
    address:"Delhi"
}

const student2 = {
    ...student, name:"stu"
}

console.log(student2)




// let title = "fdsf";


// function setTitle(titleValue){


//     title = titleValue;
//     //update virtual DOme
//     //re render html page
// }


// setTitle("fasdfsdaf")



// function add(props){
//     console.log(props.address)
// }

// function mul(props){
//     console.log(props.class)
// }

// mainFunction();




















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
