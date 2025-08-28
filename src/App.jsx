import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ContactUS from './Pages/ContactUS/ContactUS'
import DashBoard from './Pages/DashBoard/DashBoard'
import Process from './Pages/Process/Process'
import Work from './Pages/Work/Work'
import AboutUS from './Pages/AboutUs/AboutUS'
import LMNavBar from './Components/LMNavBar/LMNavBar'
import LMFooter from './Components/LMFooter/LMFooter'
import logo from "./assets/images/Logo-full.svg"
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      <LMNavBar
        image={logo}
        items={[
          { url: "/", content: "Home" },
          { url: "/Work", content: "Work" },
          { url: "/Process", content: "Process" },
          { url: "/AboutUS", content: "About" },
          { url: "/DashBoard", content: "DashBoard" },
        ]}
        btn="Contact Us"
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/ContactUs' element={<ContactUS />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Process' element={<Process />} />
        <Route path='/Work' element={<Work />} />
      </Routes>

      <LMFooter
        image={logo}
        items={[
          { url: "/", content: "Home" },
          { url: "#", content: "Service" },
          { url: "/Work", content: "Work" },
          { url: "/Process", content: "Process" },
          { url: "/AboutUS", content: "About" },
          { url: "#", content: "Career" },
          { url: "/ContactUs", content: "Contact" },
        ]}
      />
    </>
  )
}

export default App