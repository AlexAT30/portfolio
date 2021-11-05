import './assets/css/normalize.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/styles.css'
import { useContext, useState } from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import ContactData from './components/ContactData';
import SideMenu from './components/SideMenu';
import Portfolio from './components/Portfolio';
import { useEffect } from 'react';
import Context from './context/Context';

function App() {
  const {language} = useContext(Context);
  //Sidemenu
  const [sideMenu, setSideMenu] = useState(null);
  const handleClose = () => {
    if(sideMenu) {
      return setSideMenu(false);
    }
    setSideMenu(true);
  }
  //appear animations
  useEffect(
    ()=> {
      const appearItems = document.querySelectorAll('.appear');
      const handleScroll = () => {
        for(let i = 0; i < appearItems.length; i++) {
          if(appearItems[i].getBoundingClientRect().top < 500){
            appearItems[i].style.opacity = 1;
            appearItems[i].classList.add('appear-bottom')
          }
        }
      }
      document.addEventListener('scroll', handleScroll);
      return(()=> {
        document.addEventListener('load', () => {
          console.log('hola');
        })
      });
    }, []
  );

  return (
    <>
      <SideMenu sideMenu={sideMenu} handleClose={handleClose} />
      <NavBar handleClose={handleClose} />
      <section className='container-fluid'>
        <div className='row' id='home'>
          <Hero />
        </div>
      </section>
      <section className='gradient container-fluid'>
        <div className='container'>
          <div className='row py-5 justify-content-center' id='about-me'>
            <AboutMe />
            <Abilities />
          </div>
        </div>
      </section>
      <section className='container' id='portfolio'>
        <div className='row py-5'>
          <h2 className='text-center text-accent color-primary'>{language === 'english'? 'See my projects': 'Mira mis proyectos'}</h2>
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </section>
      <section className='container contact__container'>
        <div className='row py-5 justify-content-around' id='contact'>
          <div className='contact__bg'></div>
          <ContactData />
          <Contact />
        </div>
      </section>
    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </>
  );
}

export default App;
