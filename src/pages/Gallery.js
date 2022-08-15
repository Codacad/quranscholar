import { ZoomOutMap } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ImageGallery from  '../gallery.json'

const Gallery = () => {

  return (
    <Box sx={{marginTop:"100px", padding:"2% 20% 5% 20%"}} className="gallery-wrapper">
        <Typography variant='h3' textAlign={'center'} sx={{marginBottom:"20px"}}>
            Gallery
        </Typography>
        <Typography className='gallery' component={"div"}  sx={{display:"grid", gap:"20px", gridTemplateColumns:"repeat(2, 1fr)"}} >
            {
            ImageGallery.map(img => {
                return <Typography variant='div' component={'div'} className='img-wrapper'>
                        <Typography className='img' component={"div"} sx={{position:"relative"}}>
                            <img 
                            style={{width:"100%",
                                    height:"400px", 
                                    objectFit:"cover", 
                                    borderRadius:"10px", 
                                    cursor:"pointer", 
                                    position:"relative", 
                                    zIndex:"0"                                      
                                }} 
                                src={img.imgURL} 
                                alt={img.imgName} 
                            />
                            <ZoomOutMap className='zoomout'></ZoomOutMap>
                        </Typography>
                    </Typography>
                })
            }
        </Typography>
    </Box>
  )
}

export default Gallery
