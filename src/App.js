import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>

      <Route path='/portfolio'>
      <div>
      <Navbar/>
      <Portfolio/>

      </div>
    </Route>

    <Route path='/contact'>
      <div>
      <Navbar/>
      <Contact/>

      </div>
    </Route>
        
    <Route path='/about'>
      <div>
      <Navbar/>
      <About/>

      </div>
    </Route>
    <Route path='/'>
    <div>
    <Navbar/>
    <Header />
     
    </div>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
