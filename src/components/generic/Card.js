const Card = ({title, text, img}) => {
  return(
    <div className='card col-10 col-md-5 mb-4 mb-md-0 justify-content-start appear'>
      <img className='card__image mb-3' src={img} alt='front-icon' />
      <h3 className='card__title m-0 text-accent'>{title}</h3>
      <p className='text-center'>
        {text}
      </p>
    </div>
  );
}
export default Card;