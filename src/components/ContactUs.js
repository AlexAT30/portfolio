const ContactUs = () => {
  return(
    <form className='card'>
      <h2 className='text-accent color-primary'>Contactame</h2>
      <label className=''>
        <input type='text' placeholder='Escribe tu nombre aquí...' />
      </label>
      <label>
        <input type='email' placeholder='Escribe tu correo aquí...' />
      </label>
      <label>
        <textarea rows='4' placeholder='Escribe tu mensaje aquí...' />
      </label>
      <button type='submit'>Envíar</button>
    </form>
  );
} 
export default ContactUs;