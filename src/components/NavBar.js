import { Link } from "react-scroll";

const NavBar = ({handleClose}) => {
  return(
    <nav className='nav container-fluid d-flex justify-content-between align-items-center p-3'>
      <Link className='nav__brand text-accent color-primary scrollButton' to='home' smooth={true}>Alex Aguiñaga</Link>
      <button className='nav__toogle p-2 px-3 gradient color-primary' onClick={handleClose}><i className="fas fa-bars"></i></button>
    </nav>
  );
}
export default NavBar;