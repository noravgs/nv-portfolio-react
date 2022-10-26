import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
 return (
  <div name='home' className='w-full h-screen bg-[#73AB84]'>
   {/*container*/}
   <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#ade1e5]'>Hola, my name is</p>
    <h1 className='text-4xl sm:text-7xl font:bold text-white'>Nora Vargas</h1>
    <h2 className='text-4xl sm:text-7xl font:bold text-[#074f57]'>Full Stack Software Engineer</h2>
    <p className='text-[#074f57] py-4 max-w[700px]'>I'm a full-stack Software Engineer specializing in designing, building and consulting execeptional digital experiences. Currently, I'm focusing on building responsive full-stack web applications.</p>
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
