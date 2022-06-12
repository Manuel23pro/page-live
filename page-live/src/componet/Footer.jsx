import '../App.css'
import logo from '../asset/img/logo-light.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <div className='footer__logo'>
          <img src={logo} alt="" />
        </div>
        <div className='footer__boton'>
          <button>
            Get Stated
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Footer
