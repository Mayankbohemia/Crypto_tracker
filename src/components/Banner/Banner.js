import React from 'react'; 
import './Banner.css';

import { Container, Typography } from '@mui/material';

const Banner = () => {
  return (
    <div style={{backgroundImage:'url(./crypto.jpg)' }} className='banner'>
       <Container sx={{
        height:400,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        paddingTop:25,
          
       }}>
        <div className='tagline' 
        
        >
        <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
         

        </div>
        

       </Container>
        
    </div>
  )
}

export default Banner