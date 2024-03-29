import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import botonimg from '../imagenes/botonWS.png'



const Footer = () => {
  return (
    <div style={{ backgroundColor:"#000080" , color : "white", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
    <img src="logo2" alt="kalel" />
    <h1>¡¡Nuestra meta ... Tu LICENCIA!!</h1>
    <br />
    <div style={{ marginLeft: '65%' }}> {/* Este div se moverá a la derecha */}
      <h2>Contactanos</h2>
      <PhoneIcon /> <span>Central Telefonica: 7777777 77</span> <br /> <br />
      <PhoneIcon /> <span>Central WhatsApp: 9325486225</span> <br /> <br />
      <EmailIcon /> <span>Informes@skfdfgkdfg</span> <br /> <br />
      <h2>SIGUENOS</h2><br />
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <IconButton color="primary">
          <FacebookOutlinedIcon />
        </IconButton>
        <IconButton color="secondary">
          <InstagramIcon />
        </IconButton>
        <IconButton color="secondary">
          <YouTubeIcon />
        </IconButton>
      </a>
      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <img src="botonimg" alt="" />
      </a>
      </div>
      <hr style={{ borderColor: 'white', marginTop: '20px' }} />
      
     <p>Copyright KalelSAC. Derechos Reservados</p>
    </div>
  )
}

export default Footer
