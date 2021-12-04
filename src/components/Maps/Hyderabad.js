import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import "./m.css";
const Hyderabad = () => {
  const style={
    width:"600px", 
    height:"450px", 
    borderWidth: '5px', 
    
  }
  
    return (
        <div className='framebox'>
            <Navbar2 />
            <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9574194475317!2d78.44736031470352!3d17.41383098806282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9739d35c0145%3A0x6b33886a1d93a62!2sThe%20Antique%20Loft%20Hyderabad%20Furniture!5e0!3m2!1sen!2sin!4v1638614583847!5m2!1sen!2sin"></iframe>
           </div>
    )
}

export default Hyderabad
