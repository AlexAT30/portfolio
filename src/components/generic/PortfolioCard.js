const PortfolioCard = ({project}) => {
  const technologiesIcons = project.technologies.map((technologie) => {
    switch (technologie) {
      case 'html':
        return <i className="fab fa-html5 me-3"></i>
      case 'css':
        return <i className="fab fa-css3-alt me-3"></i>
      case 'js':
        <i className="fab fa-js-square me-3"></i>
      case 'sass':
        return <i className="fab fa-sass me-3"></i>
      case 'bootstrap':
        return <i className="fab fa-bootstrap me-3"></i>
      case 'react':
        return <i className="fab fa-react me-3"></i>
      case 'node':
        return <i className="fab fa-node me-3"></i>
    }
  })

  return (
    <div className="card col-10 col-md-7 mx-auto my-5 pt-0 appear">
      <h3 className="color-secondary text-accent">{project.name}</h3>
      <a href={project.url} className='w-90' ><img className="w-100 rounded" src={project.image_url} alt={project.name} /></a>
      <div className="d-flex w-90 icons mt-3 pb-4 color-primary">
        {technologiesIcons}
      </div>
    </div>
  );
};
export default PortfolioCard;
