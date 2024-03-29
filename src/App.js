import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contacto from './componentes/pages/Contacto'
import Home from './componentes/pages/Home'
import Servicios from './componentes/pages/Servicios'
import Footer from './componentes/pages/Footer'

import Programas from './componentes/pages/Programas'
import CardNavBar from './componentes/common/CardNavBar'
import Socios from './componentes/pages/Socios'
import { Slider } from '@mui/material'



const App = () => {
  return (

        <BrowserRouter>
       <CardNavBar/> {/* puse el navbar en la principal para que se muestre en todas las rutas  */}
      

        <Routes>
       
        < Route path="/" element ={<Home/>}/>
        < Route path="/Servicios" element ={<Servicios/>}/>
        < Route path="/Contacto" element ={<Contacto/>}/>
        < Route path="/Programas" element ={<Programas/>}/>
        < Route path="/Socios" element ={<Socios/>}/>
        < Route path="/Slider" element ={<Slider/>}/>
        
        
        

        </Routes>
        <Footer/>
        </BrowserRouter>
      
    
 
  )
}

export default App
