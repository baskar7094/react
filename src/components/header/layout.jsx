import React from 'react'
import Navbar from './navbar'
import './layout.css'
import Head from './head'
import Cards from '../main/cards'
import Footer from '../footer/footer'
import Page404 from '../page404'
export default function Layout() {
    return (
        <>
            <div className=' z-3 position-sticky top-0 w-100'>
                <Navbar />

            </div>
            <div>
                <Head />
            </div>
            <div>
                <Cards/>
            </div>
            <div className='text-left ps-5 text-black'>
            <Footer/>

            </div>
        </>
    )
}
