import React from 'react'
import "../Styles/Cards.css";
//import {FaCartPlus} from "react-icons/fa";

const Cards = ({img, Head, id, button, price, onClick}) => {
  return (
    <div className='main__div'>
        <img src={img} onClick={onClick} className="mian__image" alt='' />
        <p className='text-lg pl-3 font-semibold mt-8'>{Head}</p>
        <h2 className='text-xl pl-3 font-semibold'>{id}</h2><br />
        <p className='text-center font-medium'>{price}</p>
        <button onClick={onClick} className='main__button'>{button}</button>
    </div>
  )
}

export default Cards