import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// font awessome Fonts
import '@fortawesome/fontawesome-free/css/all.css';
// Layout Components
import Header from './components/Header/Header';

// Scenes Components Importation
import Home from "./scenes/Home/Home.jsx";
import Services from "./scenes/Services/Services.jsx";
import Blog from "./scenes/Blog/Blog.jsx";
import Contact from "./scenes/Contact/Contact.jsx";
import About from "./scenes/About/About.jsx";
import Admin from "./scenes/AdminDashbord/Admin";
/*import SignUp from "./scenes/SignUp/SignUp.jsx";
import LearnMore from "./scenes/LearnMore/LearnMore.jsx";*/

function App() {
  return (
    <Router>
        <Switch>
          <Route component={Home} exact path="/" ></Route>
          <Route component={Services} path="/services" ></Route>
          <Route component={Blog} path="/blog" ></Route>
          <Route component={Contact} path="/contact" ></Route>
          <Route component={About} path="/about" ></Route>
          <Route component={Admin} path="/admin"></Route>
        </Switch>
    </Router>

  );
}

export default App;


const paddingTop = {
  paddingTop:"5rem",
}