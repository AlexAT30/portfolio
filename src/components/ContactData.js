const ContactData = () => {
  return(
    <div className='card px-5 col-10 col-lg-6 mb-5 mb-lg-0 pb-5 align-items-start'>
      <p className='fw-light text-upper mb-0'>¿Te interesó mi perfil?</p>
      <h2 className='text-accent color-primary m-0'>Contáctame</h2>
      <div className='d-flex flex-column'>
        <p className='m-3'><i className="fas fa-user-circle color-primary"></i>: Mario Alejandro Aguiñaga Torres</p>
        <p className='m-3'><i className="fas fa-mobile-alt color-primary"></i>: +52 01 33 1974 4097</p>
        <p className='m-3'><i className="fas fa-envelope color-primary"></i>: <a href='#correo' className='color-primary'>marioalejandro300402@gmail.com</a></p>
        <p className='m-3'><i className="fas fa-map-marker-alt color-primary"></i>: Zapopan, Jalisco</p>
      </div>
      <div className='d-flex align-items-center icons color-secondary w-100 align-self-end'>
        <i className="fab fa-github p-2"></i>
        <i className="fab fa-linkedin-in p-2"></i>
      </div>
    </div>
  );
}
export default ContactData;