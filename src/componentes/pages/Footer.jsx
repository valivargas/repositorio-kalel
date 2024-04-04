import React, { useState, useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Divider, Grid } from '@mui/material';
import FooterBackground from '../../assets/imagenes/azul.jpg';
import { logo2Image } from '../common/ayuda/constantes';



import { Carousel } from 'react-bootstrap'

const Footer = () => {
  const [socios, setSocios] = useState([]);

  useEffect(() => {
    const fetchSocios = async () => {
      try {
        const response = await fetch('https://api.kalelsac.com/api/web/socios/');
        if (response.ok) {
          const data = await response.json();
          setSocios(data); // Guardar los datos en el estado
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchSocios(); // Llamar a la función al montar el componente
  }, []); // La dependencia está vacía para que se ejecute solo una vez al montar el componente

  return (
    
    <Box
      style={{
        backgroundImage: `url(${FooterBackground})`,
        color: "white",
        padding: '20px'
      }}
    >
      <Grid container direction='row' spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" color="white" textAlign='center'>Nuestros Socios Estratégicos</Typography>
        </Grid>
        
        <Carousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <Carousel.Inner>
        {socios.map((image, index) => (
          <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel.Inner>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </Carousel>
        
        <Grid item container xs={12} md={6} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <img src={logo2Image} alt="Logo" style={{ display: 'block', margin: 'auto' , width: "250px", height: "auto" }} />
          </Grid>
          <Grid item xs={12}>
            <h2 style={{textAlign: 'center'}}>¡¡Nuestra meta ... TU LICENCIA!!</h2>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={3} spacing={2} alignItems='center' textAlign="center">
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
        <Grid item container xs={12} md={3} alignItems='center' textAlign="center">
          <Grid item xs={12}>
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
          <Divider color='white' variant="middle" style={{height: "2px"}} />
        </Grid>

        <Grid item xs={12}>
          <p style={{textAlign: 'center'}}>Copyright KalelSAC. Derechos Reservados</p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
