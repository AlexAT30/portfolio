import './assets/css/normalize.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/styles.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Abilities from './components/Abilities';

function App() {
  return (
    <>
    <NavBar />
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
    <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </>
  );
}

export default App;
