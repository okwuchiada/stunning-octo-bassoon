import './App.css';
import Header from './Components/header';
import About from './Components/About';
import Catalogue from './Components/Catalogue';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
       <Header />
       <Switch>
       <Route path="/about">
          <About />
       </Route>
       <Route exact path="/catalogue" component={Catalogue}>
         
       </Route>
       <Route exact path="/contact">
         <Contact/>
         </Route>

       </Switch>
      <Footer />
    </Router>
  );
}

export default App;
