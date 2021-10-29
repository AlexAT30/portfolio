import img from '../assets/images/imagen-prueba.png'

const Portfolio = ({refProp}) => {
  return(
    <div ref={refProp} className='card col-10 col-md-7 mx-auto my-3 pt-0 appear'>
      <h3 className='color-secondary text-accent'>Nombre del proyecto</h3>
      <img className='w-100 rounded' src={img} alt='img' />
      <div className='d-flex w-100 icons mt-2 pb-3 color-primary'>
        <i className="fab fa-react p-1"></i>
        <i className="fab fa-bootstrap p-1"></i>
      </div> 

    </div>
  );
}
export default Portfolio;