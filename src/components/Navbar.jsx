import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar color='secondary'>
                <Toolbar>
                        <Typography variant="h6">Employeeapp</Typography>&nbsp;
                        <Button variant="contained">
                            <Link to={"/a"} 
                            style={{ textDecoration: "none", color: "white" }}>
                            Add
                            </Link>
                            </Button>&nbsp;
                        <Button variant="contained">
                        <Link to={"/"} 
                            style={{ textDecoration: "none", color: "white" }}>
                            View
                            </Link>
                        </Button>
                </Toolbar>
            </AppBar>
        </Box>
        <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar