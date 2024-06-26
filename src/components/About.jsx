import React from 'react'

const About = () => {
 return (
  <div name='about' className='w-full h-screen bg-[#074f57] text-gray-200'>
   <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
         <p className='text-4xl font-bold inline border-b-4 border-[#ade1e5]'>About</p>
     </div>
     <div></div>
     </div>
     <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-center text-3xl font-bold'>
       <p>I'm a Designer that can Code. Explore my creative haven!</p>
      </div>
      <div>
       <p>I am passionate about building functional software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
      </div>
     </div>
    </div>
    </div>
   
 );
};

export default About
