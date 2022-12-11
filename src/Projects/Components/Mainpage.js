import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { data } from '../Config/Data';
import "../Styles/Mainpage.css";
import Cards from './Cards';
import {FaArrowLeft ,FaArrowRight} from "react-icons/fa";
import { Slider } from '../Config/Data';
import Footer from "../Components/Footer";

const Main_page = () => {
    const [Filter, setFilter] = useState(data);
    const [Search, setSearch] = useState("");

    {/*Slider */}
    const [Count , setCount] = useState(0);
    const value = Slider[Count];
  
    const ForWard = () =>{
      const next = Count + 1;
      const lent = Slider.length;
      if(next === lent){
        setCount(0);
      }    
      else{
        setCount(next);
      }
    }
  
    const BackWard = () =>{
      const back = Count - 1;
      const lent = Slider.length;
  
      if(back<0)
      {
        setCount(lent -1)
      }
      else{
        setCount(back);
      }
    }
  
    useEffect(() =>{
     const setting = setTimeout(() =>{ 
        ForWard()
      },2000);
      return () =>clearTimeout(setting)
    },[Count]);

    
   const navigate= useNavigate()
    const filteredTech = (opt) =>{
        if(opt==='all'){
            setFilter(data.filter((it) =>it.all===opt))
        }
        if(opt==='wine'){
            setFilter(data.filter((it) =>it.option===opt))
        }
        if(opt==='water'){
            setFilter(data.filter((it) =>it.option===opt))
        }
    }
  return (
    <div className='bg-gray-300'>
       {/*Slider */}
        <div>
            <img src={value.img} className='slider__image' alt='' />
        </div>
        <div className='flex gap-10 m-10 justify-between'>
            <button className='backward' onClick={BackWard}><span><FaArrowLeft /></span></button>
            <button className='backward' onClick={ForWard}><span><FaArrowRight /></span></button>
        </div>

        {/*Search the Product*/}
        {data.filter((fill) =>{
            if(Search ==="") return fill
            else if(fill.title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())){
                return fill.id;
            }
        }).map((it) =>{
            return <div >
                {/* <p>{it.title}</p> */}
                {/* <Cards img={it.img} Head={it.title} id={it.id} price={it.price} button={it.button}/> */}
            </div>
        })}

        <div className='filter__div '>
            <button className='product__button' onClick={() =>filteredTech('all')}>All Product</button>
            <button className='product__button' onClick={() =>filteredTech('wine')}>Alcohal</button>
            <button className='product__button' onClick={() =>filteredTech('water')}>Non Alcohal</button>
            <input type="text" className='search__input' value={Search} onChange={(e) => setSearch(e.target.value)} placeholder='Search..' /> 
        </div>

    <br />
    <br />
    <div className='flex flex-wrap gap-10 justify-center'>
        {Filter.map((it) =>{
            return <div>
                <Cards onClick={()=>navigate("/detailsPage",{state:it})} img={it.img} Head={it.title} id={it.id} price={it.price} button={it.button} detail={it.detail}/>
            </div>
        })}
    </div>

    <Footer />
</div>
  )
}

export default Main_page;