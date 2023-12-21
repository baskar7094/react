import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './head.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Head() {
  
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
  <>
  
  <header className='bg-hero'>
    <div  className='px-5 py-4 ' data-aos='zoom-in' data-aos-duration='3000' data-aos-once='false'>
        <div className='d-flex text-capitalize  justify-content-between px-5 py-3'>
            <h1 className='fs-1 fw-bold head-title   '>lendex</h1> 
            <Link to={'/cart'} className=' text-center fs-5 text-capitalize btn  bg-transparent border border-3 border-white rounded-4 px-4  py-1 text-center mt-3 btn-outline-light shadow-lg text-white nav-link'>purchase now</Link>
        </div>
        <div className='px-5 p-3 '>
            <h1 className='fs-1 text-capitalize fw-bold h1   '>lendex</h1>
            <h4 className=' text-capitalize fw-bold h2'
            data-aos='slide-right' dat-aos-once='false' data-aos-duration='2000'
            
            >personal portfolio <br />
            bootstrap template</h4>

            <div className='py-5 px-0 '>
                <Link to={'/demo'} className='text-white nav-link text-uppercase border border-2 btn bg-transparent head-btn px-5 py-2 shadow-lg table-hover text-center rounded-5'>more</Link>
            </div>
        </div>
    </div>
  </header>
  
  </>
  )
}
