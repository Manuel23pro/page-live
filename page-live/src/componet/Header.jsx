import '../App.css';
import logo from '../asset/img/logo-dark.svg';
import HeaderInfo from './HeaderInfo';

const Header = () => {
  return (
    <div className='header'>

        <div className='header__superior'>

            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div className='boton'>
                <button type='button'>
                    Get Started
                </button>

            </div>
           
        </div>
        <HeaderInfo / >
    </div>
  )
}

export default Header
