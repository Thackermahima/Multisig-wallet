import React,{useState} from 'react'
import { Container, Button } from '@mui/material';
import './Form.css';
 const NewTransfer = ( {createTransfer}) => {
     const [transfer, setTransfer] = useState(undefined);

     const submit = (e) => {
      e.preventDefault();
      createTransfer(transfer);
     }
     const updateTransfer = (e, field) => {
         const value = e.target.value;
         setTransfer({...transfer, [field]: value});
     }
  return (
    
    <div>
    <Container>

        <h2>Create transfer</h2>
        <form onSubmit={(e) => submit(e)}>
            <label htmlFor='amount' style={{ fontWeight:"bold", fontSize:"22px",fontFamily: "'ourier New', Courier, monospace"}}>Amount</label>
            <input 
            id="amount"
                type='text'
                onChange={ e => updateTransfer(e,'amount')}
            />
            <label htmlFor='to' style={{ fontWeight:"bold", fontSize:"22px",fontFamily: "'ourier New', Courier, monospace"}}>To</label>

            <input
                id="to"
                type='text'
                onChange={ e => updateTransfer(e, 'to')}
            />
<button  style={{ background:"#AC7D88", borderRadius:'6px', fontSize:'22px', color:'white', border:"1px solid white", padding:'5px'}}>Submit</button>
        </form>
        </Container>
    </div>
  )
}
export default NewTransfer;