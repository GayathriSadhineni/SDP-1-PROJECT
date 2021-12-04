import React from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import "./m.css";
const Delhi = () => {
  const style={
    width:"600px", 
    height:"450px", 
    borderWidth: '5px', 
    
  }
  
    return (
        <div className='framebox'>
            <Navbar2 />
            <iframe style={style} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1919913941797!2d73.16027281473227!3d19.23046268699947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be794145b8304ef%3A0xd2daf07dd369542c!2sDELHI%20FURNITURE!5e0!3m2!1sen!2sin!4v1638614678479!5m2!1sen!2sin"></iframe>
           </div>
    )
}

export default Delhi
