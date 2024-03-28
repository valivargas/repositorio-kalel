import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, ImageList, ImageListItem } from '@mui/material';


const Socios = () => {
    const [socios, setSocios] = useState([]);
    

    useEffect(() => {
        axios.get('https://api.kalelsac.com/api/web/socios/')
            .then(res => {
                setSocios(res.data);
          
            });
    }, []);

    return (
      
      <div style={{
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        padding: 20,
        gap: 30
      }}>

        <ImageList sx={{  width: 700, height: 450 , gap : 8 , overflowX: 'hidden'}} cols={6} rowHeight={164 } >
  {socios.map((socio) => (
        <ImageListItem key={socio.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <a href={socio.web} target="_blank" rel="noopener noreferrer">
        <img
          style={{ height: '100px' }}
          srcSet={`${socio.imagen}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${socio.imagen}?w=164&h=164&fit=crop&auto=format`}
          alt={socio.nombre}
         
        />
      </a>
    </ImageListItem>
  ))}
</ImageList>


      
  </div>
     ) }    
export default Socios;