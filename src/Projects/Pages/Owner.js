import React from 'react'
import "../Styles/Owner.css";
import hasnain from "../Images/hasnain.jpg";
import hasnain5 from "../Images/hasnain1.jpg";
import Footer from '../Components/Footer';

const Owner = () => {
  return (
    <div>
        <h2 className='owner__title'>Founder’s message</h2>
        <div className='owner__main'>
         <div className='owner__message'>
            <p className='font-semibold tracking-wider pt-7 p-8'>Education plays an important role in the socio-economic development of a society. Fortunate are those who avail opportunities to seek education because in Pakistan only 60% of the total population is literate. As you take this bold step of educating your mind in today’s competitive world, Laurels College of Sciences welcomes you and extends its full support to you in achieving your goals. The administration, teaching staff and facilities at Laurels are the best in the area which will help you immensely in your quest to acquire knowledge and skills, needed to become a productive and responsible citizen of the society.
            I wish you all the best for your future. May Allah bless us with His divine guidance to carry out this noble mission. Ameen.</p><br/>
        
            <div className='owner__heading'>
            <h2 className=''>Hasnain Ahmad</h2><br/>
            <h2 className=''>BS-Information Technology (AUP Peshawar)</h2><br/>
            </div>

         </div>
            
            <div className='left__side'>
                <img src={hasnain} className='h-[500px] w-[680px]' alt='' />
            </div>
      </div>

        {/*Advisor Body */}
        <h2 className='owner__title text-center font-bold text-5xl pt-14 pb-16'>Advisor’s message</h2>
        <div className='owner__main'>
            <div className='owner__message'>
            <p className='font-semibold tracking-wider pt-7 p-8'>“Live as if you were to die tomorrow. Learn as if you were to live forever.” (Mahatma Gandhi)
            Throughout our lives we constantly face various types of challenges which try to prevent our journey towards success. However, in shape of education we have a solution. Education is the only tool that helps us overcome all those challenges in whatever they might be. Education sets the foundation for all progress and development at individual as well as communal level. Laurels College of Sciences with all its capabilities will polish the hidden skills of its students so that the challenges of life might not be able to block their way towards progress.</p><br/>
            <h2 className='owner__heading'>Hasnain Ahmad</h2><br/>
            <h2 className='owner__heading'>BS-Information Technology (AUP Peshawar)</h2><br/>

         </div>
            
            <div className='left__side'>
                <img src={hasnain5} className='h-[500px] w-[620px]' alt='' />
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Owner