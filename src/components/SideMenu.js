import { useContext } from "react";
import {Link} from 'react-scroll';
import Context from "../context/Context";

const SideMenu = ({sideMenu, handleClose}) => {
  const {language} = useContext(Context)
  return(
    <>
    <div className={`sidemenu__bg sidemenu__bg-${sideMenu}`} onClick={handleClose}></div>
      <div className={`sidemenu sidemenu-${sideMenu}`}>
        <button className='sidemenu__close' onClick={handleClose}><i className="fas fa-times"></i></button>
        <ul className='sidemenu__menu'>
          <li><Link to='home' smooth={true} onClick={handleClose}>{language === 'english'? 'Home': 'Inicio'}</Link></li>
          <li><Link to='about-me' smooth={true} onClick={handleClose}>{language === 'english'? 'About me': 'Sobre mí'}</Link></li>
          <li><Link to='portfolio' smooth={true} onClick={handleClose}>{language === 'english'? 'Portfolio': 'Portafolio'}</Link></li>
          <li><Link to='contact' smooth={true} onClick={handleClose}>{language === 'english'? 'Contact': 'Contacto'}</Link></li>
        </ul>
      </div>
    </>
  );
}
export default SideMenu;