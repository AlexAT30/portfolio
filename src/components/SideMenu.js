import { useContext } from "react";
import Context from "../context/Context";

const SideMenu = ({sideMenu, handleClose}) => {
  const {language, changeLanguage} = useContext(Context);
  return(
    <>
    <div className={`sidemenu__bg sidemenu__bg-${sideMenu}`} onClick={handleClose}></div>
      <div className={`sidemenu sidemenu-${sideMenu}`}>
        <button className='sidemenu__close' onClick={handleClose}><i className="fas fa-times"></i></button>
        <ul className='sidemenu__menu'>
          <li><a href='#home' onClick={handleClose}>{language === 'english'? 'Home': 'Inicio'}</a></li>
          <li><a href='#about-me' onClick={handleClose}>{language === 'english'? 'About me': 'Sobre mí'}</a></li>
          <li><a href='#portfolio' onClick={handleClose}>{language === 'english'? 'Portfolio': 'Portafolio'}</a></li>
          <li><a href='#contact' onClick={handleClose}>{language === 'english'? 'Contact': 'Contacto'}</a></li>
          <li>
            <button className='sidemenu__button' onClick={()=> {
              if(language === 'english'){
                return changeLanguage('spanish')
              }
              changeLanguage('english')
              
              }}>
              <i className="fas fa-language"></i> {language === 'english'? 'English': 'Español'}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default SideMenu;