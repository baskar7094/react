
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className='bg-full-frame'>

            <div className=' container py-3 px-0  '>
                <nav className=' d-flex justify-content-between align-items-center  '>
                    <div>
                        <Link to={'/'} className=' fw-bold text-uppercase navbar-brand  fs-3' >envato <span className='logo-span'>market</span></Link>
                    </div>
                    <div>
                        <button className='btn btn-success px-3 py-1 shadow-lg'> <Link to={'page404'} className='px-3 py-1 fw-bold fs-6 nav-link text-uppercase' >buy now</Link> </button>
                    </div>
                </nav>
            </div>



        </div>
    )
}
