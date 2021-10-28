const SideMenu = ({sideMenu, handleClose}) => {
  return(
    <>
    <div className={`sidemenu__bg sidemenu__bg-${sideMenu}`} onClick={handleClose}></div>
      <div className={`sidemenu sidemenu-${sideMenu}`}>
        <button className='sidemenu__close' onClick={handleClose}><i className="fas fa-times"></i></button>
        <ul className='sidemenu__menu'>
          <li><a href='#home' onClick={handleClose}>Inicio</a></li>
          <li><a href='#about-me' onClick={handleClose}>Sobre mí</a></li>
          <li><a href='#contact' onClick={handleClose}>Contacto</a></li>
        </ul>
      </div>
    </>
  );
}
export default SideMenu;