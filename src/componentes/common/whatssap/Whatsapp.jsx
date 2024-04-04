import React from 'react';
import { botonWs } from '../ayuda/constantes';

function Whatsapp() {
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
        opacity: 1, // Hacer el botón siempre visible
    };

    const iconStyle = {
        width: '100px',
        height: '90px',
        backgroundColor: '',
        borderRadius: '10%',
        textAlign: 'center',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        padding: '10px',
    };

    return (
        <div style={buttonStyle}>
            <a href="https://api.whatsapp.com/send?phone=TUNUMERO">
 
                <img src={botonWs} alt="WhatsApp" style={iconStyle} />
              
            </a>
           
        </div>
    );
}

export default Whatsapp;
