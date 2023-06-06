import React from 'react'
import Photo1 from '../assets/moHome.png'
import Photo2 from '../assets/moAboutUs.png'

import Photo4 from '../assets/enigmaHome.png'
import Photo5 from '../assets/enigmaEvents.png'
import Photo6 from '../assets/enigmaAboutUs.png'
import Photo7 from '../assets/tacoDGOHome.png'
import Photo8 from '../assets/tacoDGOMenu.png'
import Photo9 from '../assets/tacoDGOAboutUs.png'
// import Photo8 from '../assets/collabx.jpg'
// import Photo9 from '../assets/collabXprototype.jpg'
import Photo10 from '../assets/QuirkzbrandingBoard2.png'
import Photo11 from '../assets/qPattern2.png'
import Photo12 from '../assets/QHoodie_Mockup.png'
import Photo13 from '../assets/gaishabrandingBoard2.png'
import Photo14 from '../assets/geishaPattern3.png'
import Photo15 from '../assets/Gyellow.png'
import Photo16 from '../assets/geishaproductposter.png'





const Designs = () => {
 return (
  <div className= 'pb-8 bg-[#074f57]'>
   <div name='about' className='w-full h-screen bg-[#074f57] text-gray-200'>
   <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
         <p className='text-4xl font-bold inline border-b-4 border-[#ade1e5]'>Design</p>
     </div>
     <div></div>
     </div>
     <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='sm:text-center text-3xl font-bold'>
       <p>Check out my latest branding and web designs.</p>
      </div>
      <div>
          <p>I harness the incredible potential of Adobe and Figma to unleash a symphony of creativity that leaves an indelible mark. With an unwavering focus on elevating business brands, I channel my passion into crafting visually captivating and strategically driven designs.I immerse myself in a world of color, typography, and imagery, meticulously curating every element to breathe life into a brand's unique identity. From sleek and modern aesthetics to dynamic and vibrant experiences, I orchestrate designs that make hearts skip a beat and minds ignite with curiosity.</p>
          
       
      </div>
      
     </div>
     
    </div>
    
    </div>
   
<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-1">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Photo1} alt=""/><img class="h-auto max-w-full rounded-lg" src={Photo2} alt=""/>
        </div>
        {/* <div>
            
        </div> */}
        {/* <div>
            <img class="h-auto max-w-full rounded-lg" src={Photo3} alt=""/>
        </div> */}
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Photo4} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo5} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo6} alt=""/>
        </div>
        {/* <div>
            
        </div>
        <div>
            
        </div> */}
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Photo7} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo8} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo9} alt=""/>
        </div>
        {/* <div>
            
        </div>
        <div>
            
        </div> */}
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Photo10} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo11} alt=""/>
            <img class="h-auto max-w-full rounded-lg" src={Photo12} alt=""/>
        </div>
        <div>
        <img class="h-auto max-w-full rounded-lg" src={Photo13} alt=""/>
        <img class="h-auto max-w-full rounded-lg" src={Photo14} alt=""/>
        <img class="h-auto max-w-full rounded-lg" src={Photo15} alt=""/>
        <img class="h-auto max-w-full rounded-lg" src={Photo16} alt=""/>
        </div>
        {/* <div>
            
        </div> */}
    </div>
</div>

    
    
      
      </div>
      
   
 )
}

export default Designs
