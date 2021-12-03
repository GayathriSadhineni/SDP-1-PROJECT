import React,{useState} from 'react';
import '../../App.css';
import Login from '../../login/login';
import Navbar from '../Navbar/Navbar';

function Loginpage(){
    const [ user, setLoginUser] = useState({})
    return(
                 
             <div>
             <Navbar/>
             <Login setLoginUser={setLoginUser}/>
             </div>
        
    );
}
export default Loginpage;