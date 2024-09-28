
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const View = () => {
        var [user,setUser]=useState([])
    
        axios.get("http://localhost:3004/view")
        .then((response)=>{
            console.log(response.data)
            setUser(response.data)

        })
  return (
    <div>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>dept</TableCell>
                        <TableCell>sal</TableCell>   
                    </TableRow>
                </TableHead>
                <TableBody>
                            <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>  
                            <TableCell></TableCell>   
                        </TableRow>   
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View