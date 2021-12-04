import React from 'react'
import Navbar2 from '../Navbar2/Navbar2';
import Chatbot from '../ChatBot/chatbot';
import './chatbot.css'
const Chatpage = () => {
    return (
        <div>
            <Navbar2/>
            <div className='chatbot'> <Chatbot/>     </div>
                          
            
        </div>
    )
}

export default Chatpage
