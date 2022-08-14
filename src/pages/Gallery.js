import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import child from '../images/image-gallry/img-1.jpg'

const Gallery = () => {
    const images = [
        {id:"0", imgName:"children", url:"../images/image-gallry/img-1.jpg"},
        {id:"1", imgName:"children", url:"../images/image-gallry/img-2.jpg"},
        {id:"2", imgName:"children", url:"../images/image-gallry/img-3.jpg"},
        {id:"3", imgName:"children", url:"../images/image-gallry/img-4.jpg"},
        {id:"4", imgName:"children", url:"../images/image-gallry/img-5.jpg"}
    ]
    const [gallery, setGallery] = useState(images)

    useEffect(() => {
        setGallery(gallery)
    }, [])


  return (
    <div className="gallery" style={{marginTop:"100px", padding:"2% 20% 5 20%"}}>
        <h3 style={{padding:"15px 0"}}>Gallery</h3>
        {
            images.map(img => {
                return <div className="img-wrapper" key={img.id}>
                    <div className="img">
                        <img style={{width:"400px", height:"400px"}} src={img.url} alt="" />
                    </div>
                </div>
            })
        }
    </div>
    // <Box sx={{marginTop:"100px", padding:"5% 20%"}}>
    //   <Typography variant='h3' textAlign={'center'}>
    //     Gallery
    //   </Typography>
    //  {
    //     images.map(img => {
    //         return <Grid key={img.id} container direction={'row'}>
    //             <Grid item md={4}><img sx={{width:"100%", height:"300px"}} src={img.url} alt="" /></Grid>
    //         </Grid>
    //     })
    //  }
    // </Box>
  )
}

export default Gallery
