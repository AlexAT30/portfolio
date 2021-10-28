import './assets/css/normalize.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/styles.css'
import { useState } from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import ContactData from './components/ContactData';
import SideMenu from './components/SideMenu';


function App() {

  //Sidemenu
  const [sideMenu, setSideMenu] = useState(true);
  const handleClose = () => {
    if(sideMenu) {
      return setSideMenu(false);
    }
    setSideMenu(true);
  }

  return (
    <>
    <SideMenu sideMenu={sideMenu} handleClose={handleClose} />
    <NavBar handleClose={handleClose} />
    <div className='container-fluid'>
      <div className='row'>
        <Hero />
      </div>
    </div>
    <div className='gradient container-fluid'>
      <div className='container'>
        <div className='row py-5 justify-content-center'>
          <AboutMe />
          <Abilities />
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row py-5 justify-content-around'>
        <ContactData />
        <Contact />
      </div>
    </div>
    <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </>
  );
}

export default App;
