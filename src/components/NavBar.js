const NavBar = () => {
  return(
    <nav className='nav container-fluid d-flex justify-content-between align-items-center p-3'>
      <a className='nav__brand text-accent color-primary' href='#home'>Alex Aguiñaga</a>
      <button className='nav__toogle p-2 px-3 gradient color-primary'><i class="fas fa-bars"></i></button>
    </nav>
  );
}
export default NavBar;