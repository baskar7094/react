import React, { useEffect } from 'react'
import './footer.css'
import AOS from 'aos'
export default function Footer() {
 
 useEffect(()=>{
    AOS.init()
 },[])
    return (

<>
<h1 className=' fst-italic fw-bold'>lendex features</h1>

<div className='flex  '>

<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
<Content title={'Responsive Design' } para={'Lendex is supper responsive & work perfectly in all devices.'}/>
</div>

<div className='w-100  h-auto mb-0 start-0 end-0 p-4   bg-dark mt-5  text-center     bottom-0 '>
    <h1 className='text-white'>make your website come to life quickly.</h1>
</div>
</>    )
}

function Content(props){

    return(
        <>
        <div data-aos='zoom-in' data-aos-duration='2000' className='p-4 flex shadow-sm  text-black fw-bold mx-3 my-2 border '>

        <img src={''} alt="..."  className='w-75 h-75 p-5'/>

<div className='d-flex flex-column p-2'> 
<h2>{props.title}</h2>
<p>{props.para}</p>

</div>
</div>

        </>
    )
}