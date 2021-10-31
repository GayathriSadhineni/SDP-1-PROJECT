import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Form2 from './components/Login/Form2'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

    return (
        <div>  
            <Router>
            <Navbar/>
                          
                <div>
                    <Switch>
                                             
                        <Route path='/' exact component={Home}>
                          
                        </Route>
                        <Route path='/loginpage' exact component={Form2}></Route>
                    </Switch>
                </div>    
            </Router>            
    
        </div>
    )
}

export default App;