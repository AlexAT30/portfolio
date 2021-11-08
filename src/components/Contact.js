import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import Context from '../context/Context';
import { sendForm } from '../services/sendForm';

const Contact = () => {
  const {register, handleSubmit, reset} = useForm();
  const {language} = useContext(Context);
  const [send, setSend] = useState(false);

  const onSubmit = async (data) => {
    await sendForm(data);
    reset();
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 2000);
  }

  return(
    <form className='card px-5 col-10 col-lg-5 pb-5 appear' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-accent color-primary'>{language === 'english'? 'Leave me a message ;D': 'Dejame un mensaje ;D'}</h2>
      <label className='w-100'>
        <input className='bg-tertiary w-100 p-2 mb-3' type='text' placeholder={language === 'english'? 'Name': 'Nombre'} {...register('name', {required: true})} />
      </label>
      <label className='w-100'>
        <input className='bg-tertiary w-100 p-2 mb-3' type='email' placeholder={language === 'english'? 'Email': 'Correo'} {...register('email', {required: true})} />
      </label>
      <label className='w-100'>
        <textarea className='bg-tertiary w-100 p-2 mb-3' rows='4' placeholder={language === 'english'? 'Message': 'Mensaje'} {...register('message', {required: true})} />
      </label>
      <button className='w-100 contact__button text-accent' type='submit'>{
        language === 'english'?
        send === false? 'Send' : 'Message sent'
        : 
        send === false? 'Enviar' : 'Mensaje enviado'
      }</button>
    </form>
  );
} 
export default Contact;