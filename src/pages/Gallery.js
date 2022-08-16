import { HideImage, ZoomInMap, ZoomOutMap } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ImageGallery from  '../gallery.json'

const Gallery = () => {

//    const [hideZoomout, setHideZoomout] = useState(false)
//    const [hideZoomin, setHideZoomin] = useState(false)
   const [zoomInStyle, setZoomInStyle] = useState({display:"none"})
   const [zoomOutStyle, setZoomOutStyle] = useState({display:"block"})


    useEffect(() => {
        document.querySelectorAll('.img-wrapper').forEach((img) => {
            img.querySelector('.zoomout').addEventListener('click', function(){
                img.classList.add('zoomout-img-wrapper')
                setZoomOutStyle({
                    display: "none"
                })
                setZoomInStyle({
                    display:"block"
                })
            })
            img.querySelector('.zoomin').addEventListener('click', function(){
                img.classList.remove('zoomout-img-wrapper')
                setZoomOutStyle({
                    display: "block"
                })
                setZoomInStyle({
                    display:"none"
                })
            })
        })                 
        
    }, [])

  return (
    <Box className="gallery-wrapper">
        <Typography variant='h3' textAlign={'center'} sx={{marginBottom:"20px"}}>
            Gallery
        </Typography>
        <Typography className='gallery' component={"div"}>
            {
            ImageGallery.map(img => {
                return <Typography variant='div' key={img.id} component={'div'} className='img-wrapper'>
                        <Typography className='img' component={"div"} sx={{position:"relative"}}>
                            <img 
                            style={{                                     
                                    objectFit:"cover", 
                                    borderRadius:"10px", 
                                    cursor:"pointer", 
                                    position:"relative", 
                                    zIndex:"0"                                      
                                }} 
                                src={img.imgURL} 
                                alt={img.imgName} 
                            />
                            <ZoomOutMap className='zoomout' style={zoomOutStyle}></ZoomOutMap>
                            <ZoomInMap className='zoomin' style={zoomInStyle}></ZoomInMap>
                        </Typography>
                    </Typography>
                })
            }
        </Typography>
    </Box>
  )
}

export default Gallery
