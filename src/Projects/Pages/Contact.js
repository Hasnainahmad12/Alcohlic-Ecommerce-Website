import React, { useRef, useState } from 'react'
import "../Styles/Contacts.css";
import img from "../Images/door.jpg";
import img1 from "../Images/location.PNG";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [Done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_se55rih', 'template_gdlqowh', form.current, 'yAzxC3-DjbCtoArTI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className='find'>
        <img src={img} className="find__image" alt='' />
        <h2 className='image__head'>CONTACT US</h2>
      </div>

      <div>
        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <label className='label'>Name</label>
          <input type="text" className='input' name="user_name" placeholder='Enter Name'  alt="" required/>  

          <label className='label'>Email</label>
          <input type="email" className='input' name="user_email" placeholder='Enter Email' alt="" />  
{/* 
          <label className='label'>Phone Number</label>
          <input type="text" className='input' name="phone_number" alt="" />   */}

          <label className='label'>Message</label>
          <input type="text" className='input' name="message" placeholder='Enter Message' alt="" />  
          <button className='button'>SEND</button>
        </form>
        <span className='flex flex-wrap justify-center text-amber-700 font-semibold text-2xl pt-5'>{Done && "Thanks For Your Contact.."}</span>
      </div>

      <div className='mt-16 flex flex-wrap justify-center'>
        <img src={img1} className="h-[450px] w-[650px]" alt='' />
        
        <div className='h-[450px] w-[650px] bg-slate-800'>
              <h2 className='impact__head'>Impact Software Solution.</h2>
              <p className='text-gray-400 text-center pt-5'>IT PARK BOARD</p>
              <p className='text-gray-400 text-center pt-5'>PESHAWAR.</p>
              <button className='location__button'><a href='https://www.google.com/maps/place/IMPACT+Softwares/@33.9990768,71.4664094,17z/data=!3m1!4b1!4m5!3m4!1s0x38d910d0e2a107fb:0xaf6f190390863a9!8m2!3d33.9990724!4d71.4685981'>VIEW ON GOOGLE MAPS</a></button>
        </div>
        
      </div>

    </div>
  )
}

export default Contact