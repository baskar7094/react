import './cards.css'
import Home from '../../assets/home.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Cards() {
useEffect(()=>{
    AOS.init()
},[])

    return (
   <div className='flex p-5 mt-5 gap-5'>

    <Card image={<Home/>} title={'Home'} /> 
    <Card image={<Home/>} title={'about'}/> 
    <Card image={<Home/>} title={'project'}/> 
    <Card image={<Home/>} title={'project-list'}/> 
    <Card image={<Home/>} title={'item'}/> 
    <Card image={<Home/>} title={'items-list'}/> 
    <Card image={<Home/>} title={'contact'}/> 
    <Card image={<Home/>} title={'contact-list'}/> 
    <Card image={<Home/>} title={'service'}/> 
    <Card image={<Home/>} title={'service-list'}/> 
    <Card image={<Home/>} title={'404 page error'}/> 
   </div>
  )
}

function Card(props){
    
    return(
<>
<div className="card shadow-lg  d "  data-aos-once='false' data-aos='zoom-in' data-aos-duration='3000'>
    <img src={props.image} alt="images" className=' '
     />
     <h4 className='text-center fw-bold  p-2 fst-italic' >{props.title}</h4>
</div>
</>

    )
}