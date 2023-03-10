import React, { useRef } from 'react'
import './Navbar.css'

// Iconlar
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbArrowsCross } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";


const Navbar = () => {


  //OVERLAY MENYUSUNUN ACILMASI-BAGLANMASI FUNKSIYASI 
  const aqDivUnvaniRef = useRef()
  const aqMenyunuAc = (e) => {
    const kliklenenElement = e.target

    if (kliklenenElement.classList.contains('navbar-toggler')) {
      aqDivUnvaniRef.current.classList.add('aktiv')
    }
  }
  const aqMenyunuBagla = (e) => {
    const kliknenenElement = e.target

    if (kliknenenElement.classList.contains('cross-icon') || kliknenenElement.classList.contains('nav-links')) {
      aqDivUnvaniRef.current.classList.remove('aktiv')
    }
  }
  // //  AXTARISH MENYUSUNUN ACILMA-BAGLANMA FUKSNIYASI
  const axtarishDivUnvaniRef = useRef()
  const axtarishAc = (e) => {
    const kliklenenElement = e.target

    if (kliklenenElement.classList.contains('navbar-toggler')) {
      axtarishDivUnvaniRef.current.classList.add('aktiv')
    }
  }
  const axtarishBagla = (e) => {
    const kliknenenElement = e.target

    if (kliknenenElement.classList.contains('cross-icon') || kliknenenElement.classList.contains('nav-links')) {
      axtarishDivUnvaniRef.current.classList.remove('aktiv')
    }
  }
  return (
    <>

      <div className='overlay' onClick={aqMenyunuBagla} ref={aqDivUnvaniRef}>
        <TbArrowsCross className='cross-icon' onClick={aqMenyunuBagla} />
        <div className='nav-links'>
          <Link to='#'>Home</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Pages">Pages</Link>
          <Link to="/Shop">Contact</Link>
          <Link to="/Blog">Blog</Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className='educator-logo' src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/logo-dark.png" width="172" height="90" /></a>
          <button onClick={aqMenyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars className='bars-icon' />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pages">Pages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>
            </ul>

            <div className='search' onClick={axtarishBagla} ref={axtarishDivUnvaniRef}>
              {/* <GrFormClose className='close-icon' onClick={axtarishBagla}/>  */}
              <FaSearch className='search-icon'/>
            </div>

          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar