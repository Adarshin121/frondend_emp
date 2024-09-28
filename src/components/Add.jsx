
import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <TextField
        variant="outlined" 
        label="Name"
        name="Name"
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Age"
        name="Age"
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Department"
        name="Dept"
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Salary"
        name="sal"
        />
        <br /><br />
        <Button >Submit</Button>
    </div>
  )
}

export default Add