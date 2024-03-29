import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Divider, Grid } from '@mui/material';
import { footerImage, logo2Image } from '../common/ayuda/constantes';

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "#000080",
        color: "white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundImage: `url(${footerImage})`, // Establece la imagen como fondo
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
        backgroundPosition: 'center' // Centra la imagen en el contenedor
      }}
    >
      <Grid container direction='row' spacing={4}>
        <Grid item container xs={12} md={6} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <img src={logo2Image} alt="Logo" />
          </Grid>
          <Grid item xs={12}>
            <h1 style={{textAlign: 'center'}}>¡¡Nuestra meta ... Tu LICENCIA!!</h1>
          </Grid>
        </Grid>
        <Grid item container  xs={12} md={3}  spacing={2}  alignItems='center'>
          <Grid item xs={12}>
            <h2>Contactanos</h2>
          </Grid>
          <Grid item xs={12}>
            <span><PhoneIcon /> Central Telefonica: 7777777 77</span>
          </Grid>
          <Grid item xs={12}>
            <span><PhoneIcon /> Central WhatsApp: 9325486225</span>
          </Grid>
          <Grid item xs={12}>
            <span><EmailIcon /> Informes@skfdfgkdfg</span>
          </Grid>
        </Grid>
        <Grid item container  xs={12} md={3}  spacing={2}  alignItems='center'>

          <Grid item xs={12} >
            <h2>SIGUENOS</h2>
          </Grid>
          <Grid item xs={12}>
            <IconButton color="primary">
              <FacebookOutlinedIcon />
            </IconButton>
            <IconButton color="secondary">
              <InstagramIcon />
            </IconButton>
            <IconButton color="secondary">
              <YouTubeIcon />
            </IconButton>
          </Grid>
         
        </Grid>
        
        <Grid item xs={12}>
          <Divider color='white'/>
       
        </Grid>
        <Grid item xs={12}>
          <p style={{textAlign: 'center'}}>Copyright KalelSAC. Derechos Reservados</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
