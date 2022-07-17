import React from 'react'
import { Typography, Button } from '@mui/material'

const MaterialUI = () => {
  return (
    <div style={{padding:'10em'}}>
        <Typography variant='div' marginBottom='50px' display='flex' flexDirection='column' justifyContent='center'>
          <Typography 
          variant='h1'
          color="primary"
          align='center'
          >
              Material Ui
          </Typography>
          <Typography 
          noWrap
          variant='h4'
          color="secondary"
          align='center'
          >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur suscipit iure nostrum fugiat soluta sit aliquam molestias officia tempora est odit itaque ut labore nobis ratione numquam modi cum rerum quis perspiciatis, fuga temporibus vitae autem iste. Recusandae quis deserunt atque facilis, harum quia ipsam enim impedit libero eos quo.
          </Typography>
          <Button variant="contained" color="secondary" width='50'>
            Save Me
          </Button>
        </Typography>
        <Button variant='contained'  marginRight="10px" color="secondary">
            Submit
        </Button>
        <Button variant='contained'  marginRight="10px" color="success">
            Link
        </Button>
        <Button variant='contained'  marginRight="10px" color="info">
            Login
        </Button>
        <Button variant='contained'  marginRight="10px" color="primary">
            Signup
        </Button>
    </div>
  )
}

export default MaterialUI