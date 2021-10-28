const SideMenu = ({sideMenu, setSideMenu}) => {
  const handleClose = () => {
    if(sideMenu) {
      return setSideMenu(false);
    }
    setSideMenu(true);
  }

  return(
    <div className={`sidemenu__bg sidemenu__bg-${sideMenu}`}>
      <div className={`sidemenu sidemenu-${sideMenu}`}>
        <button className='sidemenu__close' onClick={handleClose}><i className="fas fa-times"></i></button>
        <ul className='sidemenu__menu'>
          <li><a href='#home'>Inicio</a></li>
          <li><a href='#about-me'>Sobre mí</a></li>
          <li><a href='#contact'>Contacto</a></li>
        </ul>
      </div>
    </div>
  );
}
export default SideMenu;