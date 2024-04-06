import { Box, Typography, Grid } from "@mui/material";
import { footerImage, licenciaimg } from "../common/ayuda/constantes";
import { AddLocation, Phone, WhatsApp } from '@mui/icons-material';

const Contacto = () => {
  return (
  
      <Box container
        style={{
          backgroundColor: 'white',
          color: "black",
          padding: '15px',
          position: 'relative',
          
          
        }}
      >
        <img src={licenciaimg} alt="fotolicencia" width="100%" style={{ margin:'0' }} />
        
        <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              height: '150px',
              position: 'relative',
              backgroundImage: `url(${footerImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              textAlign :'center',
              justifyContent:'center',
              color :'white',
              margin : '0'
        }}>
          <h1>UBICANOS</h1>
        </div>
        
        <div style={{ 
        display: 'flex', 
        justifyContent: 'center', // Centra horizontalmente
        marginBottom: '15px', // Espaciado inferior
        padding : '15px'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.120788754629!2d-77.06129702415407!3d-11.966138140406365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce32fb6e6927%3A0xbaa3d76e78e6a10e!2skal-el%20sac!5e0!3m2!1ses-419!2spe!4v1712355996514!5m2!1ses-419!2spe"
          width="75%"
          height="350"
          style={{ 
            border: '0', 
            boxShadow: '5px 25px 35px rgba(0, 0, 0, 0.3)', // Sombras más suaves y menos opacidad
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

        

      <Typography variant="h5" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '15px', color: 'red' }}>Comas</Typography>

        <Box textAlign="center">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <span><AddLocation fontSize="small" /></span>
        <span style={{ marginLeft: '4px' }}>Comas</span>
      </a>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
        <span><Phone fontSize="small" /></span>
        <span style={{ marginLeft: '4px' }}>Telefono</span>
      </a>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <span><WhatsApp fontSize="small" color='green' /></span>
        <span style={{ marginLeft: '4px' }}>WhatsApp</span>
      </a>
    </div>
  </div>
</Box>


      </Box>
  
  );
};

export default Contacto;
