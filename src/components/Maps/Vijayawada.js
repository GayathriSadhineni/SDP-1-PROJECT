import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import "./m.css";
const Vijayawada = () => {
  const style={
    width:"600px", 
    height:"450px", 
    borderWidth: '5px', 
    
  }
  
    return (
        <div className='framebox'>
            <Navbar2 />
            <iframe style={style}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1360093796206!2d80.61142351468973!3d16.4686493886353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f19030cf4297%3A0x99498efba3e71f6!2sLiving%20Avenue%20Furniture%20and%20Interiors!5e0!3m2!1sen!2sin!4v1638614373719!5m2!1sen!2sin" ></iframe>
        </div>
    )
}

export default Vijayawada
