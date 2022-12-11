import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  //User Name & Password added
  const HandleLogin = (e) =>{
    e.preventDefault();
    if(Name.toLocaleUpperCase() === "USER" && Password.toLocaleUpperCase() === "USER"){
      navigate("/mainpage")
    } 
   
    if((Name ==="") && (Password === "")){
      alert("Please Enter Name and Password")
    }

  }
  return (
    <div className='main__container'>
      <div className='login__container'>
          <h2 className='heading'>Door to Door</h2>
          
          <div className='pl-14'>
          <form>
          <label className='label__text'>User Name</label><br />
          <input type="text" className='input__field' value={Name} onChange={(e) =>setName(e.target.value)} placeholder='Enter User Name' />

          <label className='label__text'>Password</label><br />
          <input type="password" className='input__field' value={Password} onChange={(e) =>setPassword(e.target.value)} placeholder='Enter Password'/>
          
          <button type="submit" className='button__field' onClick={HandleLogin}>Submit</button>
        
            <p className='forget__password'>Forget <span className='text-blue-600'>Password?</span></p>

            <p className='name__password'>User Name :<span className="text-blue-500 font-bold"> user </span></p>
            <p className='name__password1'>Password :<span className="text-blue-500 font-bold"> user </span></p>
          </form>
          </div>

     </div>
    </div>
  )
}

export default Login