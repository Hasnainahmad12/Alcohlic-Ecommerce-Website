import React from 'react'
import "../Styles/Masterclass.css";
import glass from "../Images/glass.jpg";
import glass1 from "../Images/glass1.jpg";
import glass3 from "../Images/glass3.jpg";
//import Footer from '../Components/Footer';

const Masterclass = () => {
  return (
    <div className=''>
        <div>
          <img src={glass} className="h-[300px] w-[100%]" alt='' />
          <h2 className='master__head font-bold text-4xl text-center mt-10'>MASTERCLASS</h2>
        </div>

        <div className='flex flex-wrap justify-center pt-10'>
            <img src={glass1} className="h-[400px] w-[660px]" alt='' />

           <div className='h-[400px] w-[660px] p-5 bg-pink-400'>
           <h2 className='head'>CLASSIC MASTERCLASS</h2>
            <p className='text-center pt-10 p-10 text-2xl'>Learn from the best AND master the art of our extraordinary cocktails</p>
           </div>
        </div>

        <div className='flex flex-wrap justify-center pt-5'>
            <img src={glass3} className="h-[400px] w-[660px]" alt='' />

           <div className='h-[400px] w-[660px] p-5 bg-green-800'>
           <h2 className='head1'>SPARKLING MASTERCLASS</h2>
                <p className='text-center pt-10 text-2xl text-white'>Learn from the best AND master the art of our extraordinary cocktails</p>
           </div>
        </div>

      {/* <div className='main__image'>
          <img src={glass} className="first__image" alt='' />
      </div>

      <div className='main__container'>
          <div>
            <img src={glass1} className="second__image" alt='' />
          </div>

          <div className='second__container'>
            <h2 className='head'>CLASSIC MASTERCLASS</h2>
            <p className='text-center pt-10 p-10 text-2xl'>Learn from the best AND master the art of our extraordinary cocktails</p>
          </div>

      </div>
          Another Pic and Container 
          <div className='main__container mt-10'>
              <div>
                <img src={glass3} className="second__image" alt='' />
              </div>

              <div className='third__container'>
                <h2 className='head1'>SPARKLING MASTERCLASS</h2>
                <p className='text-center pt-10 text-2xl text-white'>Learn from the best AND master the art of our extraordinary cocktails</p>
              </div>
            
          </div> */}
    </div>
  )
}

export default Masterclass