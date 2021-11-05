import frontend from '../assets/images/icons/frontend.png';
import backend from '../assets/images/icons/backend.png';
import Card from './generic/Card';
import { useContext } from 'react';
import Context from '../context/Context';

const Abilities = () => {
  const {language} = useContext(Context)

  return(
    <div className='col-12 col-lg-7'>
      <div className=' row justify-content-around'>
        <Card title='Frontend'
          text={
            language === 'english'?
            'The frontend technologies that currently use are HTML, CSS, SASS and JS; the libraries and frameworks that I use are React, Bootstrap and Redux.'
            :
            'Las tecnologias frontend que actualmente manejo son HTML, CSS, SASS y JS; las librerias y frameworks que uso son React, Bootstrap y  Redux.'
          }
          img={frontend}
          />
        <Card title='Backend'
          text={
            language === 'english'?
            'In the backend I use Node JS with express, with Swagger to documentation, Jest to unit and integration tests, and Sequialize to work with datebases'
            :
            'En backend manejo Node JS junto a express, con Swagger para documentación, Jest para pruebas unitarias y de integración, y Sequealize para trabajar bases de datos.'
          }
          img={backend}
        />
      </div>
    </div>
  );
}
export default Abilities;