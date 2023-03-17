
import { useState } from 'react';
import AppClasses from './App.module.css';
import Expenses from './Expenses/Expenses';
// import Button from './UI/Button';
// import Input from './UI/Input';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Box = () => {
  return(
    <div className='box'>
    Box
  </div>
  )
}



const Card = (props) => {
  return(
  <div className='card'>
    <div>
      {props.children}
    </div>
    
  </div>
)
  }





// const App = () => {
//     return (  
//       <div className={AppClasses.main}>
//         <Counter className='card_red' />
//         <Counter className='card_green' />
//        </div>
//     );
//   }

const App = () => {

  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleModelPopUp = (value) =>{
    setShow(value)
  }




  return (  
    <div className={AppClasses.main}>
      <Card>

      <Button variant="success" onClick={()=> handleModelPopUp(true)}>Open PopUp</Button>{' '}


      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <Button variant="primary" onClick={()=> handleModelPopUp(true)}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={()=> handleModelPopUp(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> handleModelPopUp(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleModelPopUp(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        {/* <Input type="email" placeholder="Enter your email"/>
        <div>
        <Input label="Select your date" type="date" />
        </div>
       
        <Button variant="primary" onClick={()=> alert("Add Button Clicked")}> <i>Add</i></Button>
        <Button variant="success" onClick={()=> alert("Save Button Clicked")}>Save</Button>
        <Button variant="danger" onClick={()=> alert("Delete Button Clicked")}>Delete</Button> */}


      </Card>
      </div>
  );
}
  

export default App;
