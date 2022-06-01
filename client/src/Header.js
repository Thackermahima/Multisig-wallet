import React from 'react'
import { Typography, Container} from '@mui/material'
const Header = ( {approvers, quorum}) => {
  return (
      <>
      <Container>

<header>
       <Typography sx={{ mt:5}} variant='h6'><span style={{ fontWeight:"bold"}}> 
       Approvers:
       </span>  {approvers.join(', ')}</Typography> 
       <hr />
       <Typography variant='h6'> <span style={{ fontWeight:"bold"}}>
       Quorum:
       </span> {quorum} </Typography> 
</header>
      </Container>

</>

    )
}

export default Header