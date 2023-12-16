
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const[Amount,setAmount]=useState(0)
  const[rate,setrate]=useState(0)
  const[year,setyear]=useState(0)
  const[interest,setInterest]=useState(0)
  console.log(Amount,rate,year);
   const calculate =(e)=>{
    const output = Amount*year*rate/100;
    console.log(output);
    setInterest(output);


   }
   const reset = (e)=>{
    setAmount(0);
setInterest(0);
setrate(0);
setyear(0)
  }
  
  return (
    <div className="App">
      <center>
<div className='container'>
<div className='header'>
<h1>Simple Interest Calculator</h1>
<p>Calculate your simple Interest with us ❤️</p>
</div>
<div className='total'>
  <h2> &#8377; {interest} </h2>
  <p>Your Total Interest</p>
</div>


<div className="form" >
  <form>
<div className="input">
  <br />
<TextField id="outlined-basic" value={Amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="outlined" />
<br />
<TextField id="outlined-basic" value={rate||""} onChange={(e)=>setrate(e.target.value)} label="Rate" variant="outlined" />
<br />
<TextField id="outlined-basic" value={year||""} onChange={(e)=>setyear(e.target.value)} label="Year" variant="outlined" />


</div>
<div className="button">
<br />
<Button variant="contained" onClick={e=>calculate(e)}>CALCULATE </Button>
<Button variant="outlined" onClick={e=>reset(e)}>RESET</Button>
</div>
  </form>
</div>
</div>


  







      </center>
   
    </div>
  );
}

export default App;
