import '../App.css';
import Animacion from '../asset/img/icon-animation.svg';
import desing from '../asset/img/icon-design.svg';
import fotografy from '../asset/img/icon-photography.svg';
import  cryto from '../asset/img/icon-crypto.svg';
import bussines from '../asset/img/icon-business.svg';

const Main = () => {
  return (
    <div className='contenedor__main'>
        <br />
        <main className='main'>
         <div className='item'>
            Check out our most popular courses!
           
         </div>

         <div className='item1'>
            <img src={Animacion} alt="" />
            <h3 className='texto'>Animation</h3>
            <p>Learn the latest animation techniques to create stuning motion design and captivate your audience.
               </p>
               <button>Get Started</button>
               
         </div>
         <div className='item2'>
            <img src={desing} alt="" />
            <h3 className='texto'>Desing</h3>
            <p>Create beautiful, usable insterfaces to help
                shape the future of how the web looks.
          </p>
               <button>Get Started</button>
              
         </div>
         <div className='item3'>
            <img src={fotografy} alt="" />
            <h3 className='texto'>Photography</h3>
            <p>Eplore critical fundamentals like lighting, composition
               ,and focus tu capture exceptional photos.
               </p>
               <button>Get Started</button>
               
         </div>
         <div className='item4'>
            <img src={cryto} alt="" />
            <h3 className='texto'>Crypto</h3>
            <p>All your need to know to get started investing in cripto.
                Go from beginner to advanced with this 54 hour course.
               .</p>
               <button>Get Started</button>
         </div>
         <div className='item5'>
            <img src={bussines} alt="" />
            <h3 className='texto'>Business</h3>
            <p>A step-by-step playbook to help you start, scale and sustain your business without outside investment.
               </p>
               <button>Get Started</button>
         </div>
        </main>
    </div>
  )
}

export default Main
