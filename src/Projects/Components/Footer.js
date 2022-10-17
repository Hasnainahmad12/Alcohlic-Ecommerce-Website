import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className='h-[300px] w-full mt-5 bg-gray-200'>
          <h2 className='text-center pt-24 text-4xl font-semibold'>RED HIGH DRINKS</h2>
          <div className='flex gap-10 pt-8 flex-wrap justify-center'>
              <p>PRIVACY POLICY</p>
              <p>CONTACT</p>
              <p>COVID-19 POLICY</p>
          </div>
    </div>
  )
}

export default Footer