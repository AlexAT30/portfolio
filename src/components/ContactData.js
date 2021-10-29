const ContactData = () => {
  return(
    <div className='card px-5 col-10 col-lg-6 mb-5 mb-lg-0 pb-5 align-items-start'>
      <p className='fw-light text-upper mb-3 mb-sm-0'>¿Te interesó mi perfil?</p>
      <h2 className='text-accent color-primary m-0'>Contáctame</h2>
      <div className='d-flex flex-column my-data'>
        <p className=''><i className="fas fa-user-circle color-primary"></i>: Mario Alejandro Aguiñaga Torres</p>
        <p className=''><i className="fas fa-mobile-alt color-primary"></i>: +52 01 33 1974 4097</p>
        <p className=''><i className="fas fa-map-marker-alt color-primary"></i>: Zapopan, Jalisco</p>
      </div>
      <div className='d-flex align-items-center icons color-secondary w-100 align-self-end mt-3'>
        <a href='mailto:marioalejandro300402@gmail.com'><i className="fas fa-envelope me-3 color-secondary"></i></a>
        <a href='https://github.com/alexat30'> <i className="fab fa-github me-3 color-secondary"></i></a>
        <a href='https://www.linkedin.com/in/alejandro-agui%C3%B1aga-2903b3215'><i className="fab fa-linkedin-in color-secondary"></i></a>
      </div>
    </div>
  );
}
export default ContactData;