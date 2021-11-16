import { useContext } from "react";
import { Link } from "react-scroll";
import Context from "../context/Context";

const NavBar = ({handleClose}) => {
  const {language, changeLanguage} = useContext(Context);
  return(
    <nav className='nav container-fluid d-flex justify-content-between align-items-center p-3'>
      <Link className='nav__brand text-accent color-primary scrollButton' to='home' smooth={true}>Alex Aguiñaga</Link>
      <div>
        <button className='nav__toogle text-accent me-3 p-2 gradient color-primary' onClick={()=> {
          if(language === 'english'){
            return changeLanguage('spanish')
          }
          changeLanguage('english')
          }}>
          {language === 'english'? 'ES': 'EN'}
        </button>
        <button className='nav__toogle p-2 px-3 gradient color-primary' onClick={handleClose}><i className="fas fa-bars"></i></button>
      </div>
    </nav>
  );
}
export default NavBar;