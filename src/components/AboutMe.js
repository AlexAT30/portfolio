import { useContext } from 'react';
import Context from '../context/Context'
import pdf from '../docs/cv_es.pdf'

const AboutMe = () => {
  const {language} = useContext(Context)
  return(
  <div className='col-12 col-lg-5 my-auto mb-5 mb-lg-0'>
    <h2 className='color-primary'>{language === 'english'? 'Hi! Im Alex Aguiñaga': '¡Hola! Soy Alex Aguiñaga'}</h2>
    <p className='mb-5'>
      {
        language === 'english'?
        'My name is Mario Alejandro Aguiñaga Torres, im web developer and math student in in the University of Guadalajara. Since I was little I ve had a great talent with the technology and facility with the mathematics; my target is dedicate to data science and machine learning in the near future'
        :
        'Mi nombre es Mario Alejandro Aguiñaga Torres, soy desarrollador web y estudiante de matemáticas en la Universidad de Guadalajara. Desde que era pequeño siempre he tenido un gran talento con la tecnología y facilidad con las matemáticas; mi meta es dedicarme a ciencia de datos y machine learning en un futuro no muy lejano.'
      }
      
    </p>
    <div className='d-flex align-items-center'>
      <a href='#contact' className='aboutme__button me-4'>{language === 'english'? 'Contact me': 'Contáctame'}</a>
      <a href={pdf} download='cv_es.pdf' className='aboutme__button'>CV <i className="far fa-address-card"></i></a>
    </div>
  </div>
  );
}
export default AboutMe;