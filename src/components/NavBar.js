const NavBar = ({sideMenu, setSideMenu}) => {
  const handleClose = () => {
    if(sideMenu) {
      return setSideMenu(false);
    }
    setSideMenu(true);
  }
  return(
    <nav className='nav container-fluid d-flex justify-content-between align-items-center p-3'>
      <a className='nav__brand text-accent color-primary' href='#home'>Alex Aguiñaga</a>
      <button className='nav__toogle p-2 px-3 gradient color-primary' onClick={handleClose}><i className="fas fa-bars"></i></button>
    </nav>
  );
}
export default NavBar;