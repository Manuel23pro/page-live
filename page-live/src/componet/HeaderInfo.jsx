import '../App.css'
import hero from '../asset/img/image-hero-desktop@2x.png';
import heroMobile from '../asset/img/image-hero-mobile@2x.png'
const HeaderInfo = () => {

  return (
    <div className="contenidoinfo">

      <div className="contenedor">

        <h1 className="info">
          Maximize skill, minimize budget
        </h1>
        <p>Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want </p>
           <button type='button'>Get Started</button>
      </div>

      <div className="hero">
        <img className='visible' src={hero} alt="hero"/>
        <img className='oculto' src={heroMobile} alt="" />
      </div>
    </div>
  )
}

export default HeaderInfo
