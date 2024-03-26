import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
 return (
  <div name='home' className='w-full h-screen bg-[#73AB84] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
   {/*container*/}
   <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#074f57]'>Hola, my name is</p>
    <h1 className='text-4xl sm:text-7xl font:bold text-white'>Nora Vargas</h1>
    <h2 className='text-4xl sm:text-7xl font:bold text-[#074f57]'>Coding Designer</h2>
    <p className='text-[#074f57] py-4 max-w[700px]'>Welcome to my creative universe where pixels meet code, and designs come to life with a touch of magic! I'm a full stack software engineer, UI/UX designer, marketing and graphic designer, fueled by an unyielding passion for crafting seamless user experiences and visually captivating designs They say design is my language, but I've got a secret coding dialect—bringing beauty and function together in perfect harmony.</p>
    <div>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ade1e5] hover:text-black hover:border-[#ade1e5]'>View Work <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' /></button>
    </div>
    <div>
    
    </div>
 </div>
  </div>
 )
}

export default Home
