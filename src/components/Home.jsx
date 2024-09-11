import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
 return (
  <div name='home' className='w-full h-screen bg-[#73AB84] bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
   {/*container*/}
   <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#074f57]'>Hola, my name is</p>
    <h1 className='text-4xl sm:text-7xl font:bold text-white'>Nora Vargas</h1>
    <h2 className='text-4xl sm:text-7xl font:bold text-[#074f57]'>Full-Stack Developer & Creative Designer</h2>
    <p className='text-[#074f57] py-4 max-w[700px]'>
  Welcome to my creative universe, where design meets development and ideas become reality!
  
  I'm a versatile <strong>Full-Stack Software Engineer</strong>, <strong>Product Designer</strong>, and <strong>Marketing Expert</strong> with experience wearing many hats—from <strong>UI/UX design</strong> and <strong>web development</strong> to <strong>graphic design</strong> and <strong>branding</strong>. My passion lies in crafting seamless user experiences, visually captivating designs, and efficient, scalable solutions. With a unique blend of technical expertise and creative flair, I bridge the gap between code and aesthetics, transforming complex problems into elegant, functional digital experiences.
  
  Whether it’s designing <strong>B2B websites</strong>, building out <strong>B2C Shopify stores</strong>, or creating engaging <strong>email marketing campaigns</strong>, my goal is to bring beauty and function together, helping businesses thrive in the digital world.
</p>
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
