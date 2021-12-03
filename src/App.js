import React from "react";
import Home2 from "./components/Home/Home2";
import Home from "./components/Home/Home";

import Footer from "./components/Footer/Footer";
import "./App.css";
import Loginpage from "./components/pages/Loginpage";
import signuppage from  "./components/pages/Sighnuppage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/user" exact component={Home2}></Route>
            <Route path="/loginpage" exact component={Loginpage}></Route>
            <Route path='/sign-up' exact component= {signuppage}/>
            <Route path='/login'>
            <Loginpage/>
          </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;