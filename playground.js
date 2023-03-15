

// function fun1(props){

//     console.log(props.name)
//     const data = "some data";
//     props.fun2(data)
// }



// const emp = {
//     name:"xyz",
//     salary: "20000",
//     fun2: (data)=> console.log(data)
// }

 
// <fun1 {...emp}/>

// fun1(emp)



// const a = [1,2,3];
// const b= [6,7,8];

// const c = [...a, ...b];

// console.log(c);

// const student = {
//     name:"xyx",
//     class:"10th",
//     address:"Delhi"
// }

// const student2 = {
//     ...student, name:"stu"
// }

// console.log(student2)




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










// function MainFunction(){
//   const student = {
//     name:"Student Name",
//     class:"10th",
//     address:"Delhi"
// };


//   return(
//     <div>
//       <h1>Main Function</h1>
//       <Address {...student}/>
//       <Name {...student}/>
//     </div>
//   )
// }

// function Address(props){
//   return(
//     <h1>{props.address}</h1>
//   )
// }

// function Name(props){
//   return(
//     <h1>{props.name}</h1>
//   )
// }







// const App = () => {
//   return (  
//     <div className='main'>
//       <MainFunction/>
//      </div>
//   );
// }











//const moment = require('moment');


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
