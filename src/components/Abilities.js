import frontend from '../assets/images/icons/frontend.png';
import backend from '../assets/images/icons/backend.png';
import Card from './generic/Card';
const Abilities = () => {
  return(
    <div className='col-11 col-md-7 row justify-content-around'>
      <Card title='Frontend'
        text='Las tecnologias frontend que actualmente manejo son HTML, CSS, SASS y JS; las librerias y frameworks que uso son React, Bootstrap y  Redux.'
        img={frontend}
        />
      <Card title='Backend'
        text='En backend manejo Node JS junto a express con Swagger para documentación, Jest para pruebas unitarias y de integración y Sequealize para trabajar bases de datos (PostsgreSQL).'
        img={backend}
      />
    </div>
  );
}
export default Abilities;