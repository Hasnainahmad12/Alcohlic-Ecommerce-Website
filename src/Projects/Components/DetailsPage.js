import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "../Styles/DetailsPage.css";
import {FaArrowLeft, FaStar} from "react-icons/fa";

const DetailsPage = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
console.log(state)
  return (
    <div className='details'>
        <button onClick={e=>navigate("/mainpage")} className='click__button text-3xl bg-red-400 p-2'><FaArrowLeft /></button>
        <img src={state.img} alt='' className='desc__image' />
        <p className='product'>{state.title}</p>
        <p className='product'>{state.id}</p>
        <p className='price'>{state.price}</p>
        <p className='paragh'>Traditional Sourcing Brought Online. Find Quality Products & Contact Verified Suppliers! Reduce Costs With Factory Direct Sourcing. Low MOQ, OEM/ODM Available. Source Now! Logistics Service. Most Popular. Trade Assurance. Production Monitoring.</p>
        <span className='flex gap-2 text-orange-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
    </div>
  )
}

export default DetailsPage