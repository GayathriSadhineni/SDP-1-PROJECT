import React from "react";
import Home2 from "./components/Home/Home2";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Sofa from "./components/Categories/Sofa";
import Beds from "./components/Categories/Beds";
import Chairs from "./components/Categories/Chairs";
import Tables from "./components/Categories/Tables";
import Organizers from "./components/Categories/Organizers";
import Chatpage from "./components/ChatBot/Chatpage";
import Vijayawada from "./components/Maps/Vijayawada";
import Hyderabad from "./components/Maps/Hyderabad";
import Mumbai from "./components/Maps/Mumbai";
import Delhi from "./components/Maps/Delhi";
import "./App.css";
import Loginpage from "./components/pages/Loginpage";
import signuppage from "./components/pages/Sighnuppage";
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
            <Route path="/sign-up" exact component={signuppage} />
            <Route path="/yourCart" exact component={Cart}></Route>
            <Route path="/sofa-and-armchair" exact component={Sofa}></Route>
            <Route path="/beds" exact component={Beds}></Route>
            <Route path="/chairs" exact component={Chairs}></Route>
            <Route path="/tables" exact component={Tables}></Route>
            <Route path="/organizers" exact component={Organizers}></Route>
            <Route path="/chatpage" exact component={Chatpage}></Route>
            <Route path="/something" exact component={Beds}></Route>
            <Route path="/vijayawada" exact component={Vijayawada}></Route>
            <Route path="/hyderabad" exact component={Hyderabad}></Route>
            <Route path="/mumbai" exact component={Mumbai}></Route>
            <Route path="/delhi" exact component={Delhi}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
