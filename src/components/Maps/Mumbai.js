import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import "./m.css";
const Mumbai = () => {
  const style={
    width:"600px", 
    height:"450px", 
    borderWidth: '5px', 
    
  }
  
    return (
        <div className='framebox'>
            <Navbar2 />
            <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.090851840478!2d72.89442191473012!3d19.103669887072048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c876709f3c7f%3A0xe654e72d385e91c6!2sFurniture%20market!5e0!3m2!1sen!2sin!4v1638614654620!5m2!1sen!2sin"></iframe>
           </div>
    )
}

export default Mumbai
