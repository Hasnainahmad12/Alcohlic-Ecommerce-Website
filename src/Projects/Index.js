import React from 'react'
import Login from './Components/Login'

import Mainpage from './Components/Mainpage'
import Contact from './Pages/Contact'
import About from './Pages/About'
//import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Owner from './Pages/Owner'
import Address from './Pages/Masterclass'
import DetailsPage from './Components/DetailsPage'
// import Footer from './Components/Footer'


const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Mainpage />}/>
          <Route path='/mainpage' element={<Mainpage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/address' element={<Address />}/>
          <Route path='/owner' element={<Owner />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/detailsPage' element={<DetailsPage />}/>
        </Routes>
        </BrowserRouter>
        
        {/* <Footer />  */}
    </div>
  )
}

export default Index
