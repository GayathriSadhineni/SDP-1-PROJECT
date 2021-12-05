import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import "./m.css";
const Chennai = () => {
  const style={
    width:"600px", 
    height:"450px", 
    borderWidth: '5px', 
    
  }
  
    return (
        <div className='framebox'>
            <Navbar2 />
            <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8199647503156!2d80.26434991464603!3d13.047128990806318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663b61665115%3A0x86ba53ee6b4ec7b8!2sModfurn%20Furniture%20Showroom!5e0!3m2!1sen!2sin!4v1638678267766!5m2!1sen!2sin"></iframe>
           </div>
    )
}

export default Chennai
