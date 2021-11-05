import { useContext } from "react";
import Context from "../context/Context";

const Hero = () => {
  const {language} = useContext(Context);
  return(
    <div className='hero col d-flex justify-content-center align-items-center text-center'>
      <div className='hero__sbox'>
        <div className='hero__fbox py-5'>
          <p className='hero__name mt-4 text-upper fw-light'>Alex Aguiñaga</p>
          <h1 className='hero__title text-accent color-primary'>{ language === 'english'? 'Web': 'Desarrollador'}<br/>{ language === 'english'? 'developer': 'web'}</h1>
        </div>
      </div>
    </div>
  );
}
export default Hero;