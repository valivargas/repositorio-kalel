import React, { useState, useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container, Divider, Grid } from '@mui/material';
import FooterBackground from '../../assets/imagenes/azul.jpg';
import { logo2Image } from '../common/ayuda/constantes';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Footer = () => {
  const [socios, setSocios] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  const slicedSocios = Array.from({ length: Math.ceil(socios.length / 4) }, (_, index) =>
    socios.slice(index * 4, index * 4 + 4)
  );

  return (
    <Box
      style={{
        backgroundImage: `url(${FooterBackground})`,
        color: "white",
        padding: '15px',
        width:'100%',
        backgroundSize: 'cover'
      }}
    >
      <Grid container direction='row' spacing={4} justifyContent="center" style={{ marginBottom: '40px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" color="white" align='center'>Nuestros Socios Estratégicos</Typography>
        </Grid>
        
        {/* Utiliza el componente Carousel de Material-UI */}
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <AutoPlaySwipeableViews
              index={activeIndex}
              onChangeIndex={(index) => setActiveIndex(index)}
              enableMouseEvents
              interval={5000} // Intervalo de cambio en milisegundos
              style={{ overflow: 'hidden' }} // Ocultar el desbordamiento de contenido
            >
              {/* Mapea cada subarray de socios */}
              {slicedSocios.map((block, index) => (
                <div key={index}>
                  <Grid container spacing={2}>
                    {/* Mapea cada socio dentro del bloque */}
                    {block.map((image, subIndex) => (
                      <Grid   item xs={6} md={3} key={subIndex}>
                        <a href={image.web} target="_blank" rel="noopener noreferrer">
                          <img
                            src={image.imagen}
                            alt={image.titulo}
                            style={{
                              height: 100,
                              width: 200,
                              objectFit: 'contain',
                              opacity: 0.5, // Imágenes con opacidad al 50%
                              transition: 'opacity 0.1s', // Transición suave
                              cursor: 'pointer'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.opacity = '1'; // Recupera la opacidad original al pasar el mouse
                            }}
                            onMouseOut={(e) => {
                              e.target.style.opacity = '0.5'; // Vuelve a la opacidad reducida al salir el mouse
                            }}
                          />
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Container>
        </Grid>
      </Grid>

        {/* Separación entre la sección de socios y el footer */}
        <Container maxWidth="lg">
          <Grid container direction='row' spacing={4} justifyContent="center">
            <Grid item container xs={12} md={4} justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <img src={logo2Image} alt="Logo" style={{ display: 'block', margin: 'auto' , width: "150", height: "auto" }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" align='center'>¡¡Nuestra meta ... TU LICENCIA!!</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={4} spacing={2} alignItems='center' textAlign="center">
              <Grid item xs={12}>
                <Typography variant="h5">Contactanos</Typography>
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
            <Grid item container xs={12} md={4} alignItems='center' textAlign="center">
              <Grid item xs={12}>
                <Typography variant="h5">Siguenos!</Typography>
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
              <Divider style={{ backgroundColor: "white", height: "4px" }} />
              <Typography align='center'>Copyright KalelSAC. Derechos Reservados</Typography>
            </Grid>
          </Grid>
        </Container>
    </Box>
  );
}

export default Footer;
