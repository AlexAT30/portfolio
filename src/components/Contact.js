const Contact = () => {
  return(
    <form className='card px-5 col-12 col-lg-5 pb-5'>
      <h2 className='text-accent color-primary'>Dejame un mensaje ;D</h2>
      <label className='w-100'>
        <input className='bg-tertiary w-100 p-2 mb-3' type='text' placeholder='Escribe tu nombre aquí...' />
      </label>
      <label className='w-100'>
        <input className='bg-tertiary w-100 p-2 mb-3' type='email' placeholder='Escribe tu correo aquí...' />
      </label>
      <label className='w-100'>
        <textarea className='bg-tertiary w-100 p-2 mb-3' rows='4' placeholder='Escribe tu mensaje aquí...' />
      </label>
      <button className='w-100 contact__button text-accent' type='submit'>Envíar</button>
    </form>
  );
} 
export default Contact;