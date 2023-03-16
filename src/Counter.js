const Counter = (props) =>{

    const {className} = props;
  
    console.log(props);
  
    const [num, setNum] = useState(0);
  
    const handleSyncCounter =()=> {
       
      setNum((prevState) => prevState+1)
    }
  
    const handleAsyncCounter =()=> {
      setTimeout(()=>{
        setNum((prevState) => prevState + 1)
      },5000)
    }
    return(
        <div className={`card ${className}`}>
          <div style={{fontSize:"26px"}}>{num}</div>
          <button onClick={handleSyncCounter}>Sync</button>
          <button onClick={handleAsyncCounter}>Async</button>
        </div>
      )
    }

export default  Counter;