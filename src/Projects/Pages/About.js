import React from 'react'
import "../Styles/About.css";
import "../Styles/About.css";
import about from "../Images/about.jpg";
import about1 from "../Images/about1.jpg";
import about4 from "../Images/about4.jpg";
import about3 from "../Images/about3.jpg";
import about2 from "../Images/about2.jpg";

const About = () => {
  return (
    <div>
      <div>
        <img src={about} className="h-[300px] w-[100%]" alt='' />

        <div>
          <h2 className='changing_text'>CHANGING THE WORLD, ONE DRINK AT A TIME…</h2>
          <p className='changing_paragh'>From the guys that brought you Chester and Liverpool’s best cocktail bars, meet The Party Box.</p>
          <p className='changing_paragh'>Providing a fully bespoke service and serving every drink under the sun with award-winning bar staff, the The Party Box is a mobile-bar, perfect for any event. Weddings, birthdays, corporate parties – you name it, we can serve it (and better than anyone else).</p>
        </div>

        <div className='second_div'>
              <h2 className='second_divHead'>WHAT'S YOUR POISON?</h2>
              <p className='second_divParagh'>Every event is just as special as we are and so we offer bespoke packages based on your requirements, but to give you a gist…</p>
        </div>

        <div className='flex flex-wrap justify-center pt-10'>
            <img src={about1} className="h-[500px] w-[660px]" alt='' />

            <div className='h-[500px] w-[660px] p-5 bg-slate-600'>
            <h2 className='head text-white'>BACK TO BASICS</h2>
              <p className='ml-2 pt-8 text-2xl'> * Hire The Party Box for £500.
                 * Supply your own selection of drinks.
                 * A minimum of 2 staff members will be on hand to serve drinks (£8pp, per hour for a minimum of three hours.)</p>
            </div>
        </div>

        <div className='flex flex-wrap justify-center pt-10'>
            <img src={about4} className="h-[500px] w-[660px]" alt='' />

            <div className='h-[500px] w-[660px] p-5 bg-slate-600'>
            <h2 className='head text-white'>MOVIN’ ON UP</h2>
              <p className='ml-2 pt-8 text-2xl'> * Hire The Party Box for £500.
                 * Supply your own selection of drinks.
                 * A minimum of 2 staff members will be on hand to serve drinks (£8pp, per hour for a minimum of three hours.)</p>
            </div>
        </div>


        <div className='flex flex-wrap justify-center pt-10'>
            <img src={about} className="h-[500px] w-[660px]" alt='' />

            <div className='h-[500px] w-[660px] p-5 bg-slate-600'>
            <h2 className='head text-white'>GETTING HOT</h2>
              <p className='ml-2 pt-8 text-2xl'> * Hire The Party Box for £500.
                 * Supply your own selection of drinks.
                 * A minimum of 2 staff members will be on hand to serve drinks (£8pp, per hour for a minimum of three hours.)</p>
            </div>
        </div>


        <div className='flex flex-wrap justify-center pt-10'>
            <img src={about3} className="h-[500px] w-[660px]" alt='' />

            <div className='h-[500px] w-[660px] p-5 bg-slate-600'>
            <h2 className='head text-white'>GETTING HOTTER</h2>
              <p className='ml-2 pt-8 text-2xl'> * Hire The Party Box for £500.
                 * Supply your own selection of drinks.
                 * A minimum of 2 staff members will be on hand to serve drinks (£8pp, per hour for a minimum of three hours.)</p>
            </div>
        </div>


        <div className='flex flex-wrap justify-center pt-10'>
            <img src={about2} className="h-[500px] w-[660px]" alt='' />

            <div className='h-[500px] w-[660px] p-5 bg-slate-600'>
            <h2 className='head text-white'>MADE IT</h2>
              <p className='ml-2 pt-8 text-2xl'>
                  Free hire of The Party Box.
                  Pre-pay for 1000 cocktails (£5.50 per cocktail).
                  Can supply beer, wine spirits and mixers.
                  A minimum of 2 staff members will be on hand to serve drinks.
              </p>
            </div>
        </div>


      </div>
    </div>
  )
}

export default About