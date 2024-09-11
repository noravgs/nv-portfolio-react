import React from 'react'
import Skill from '../Skill'

const Skills = () => {
 return (
  <div name='skills' className='w-full md:h-screen bg-[#73AB84] text-gray-200'>
   {/* container */}
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
     <div className='lg:text-3xl flex flex-col justify-center items-center sm:text-center pb-8 pl-4'>
      </div>
    <div></div>
     <div className='skills w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
       <p className='text-4xl font-bold inline border-b-4 border-[#ade1e5]'>Skills</p>
      <p className='sm:text-center text-3xl font-bold py-6'>// My tech languages, frameworks, and tools. </p>
       <div className="skillsGrid">
                {/*  Create a div and give it a class of skillsGrid for styling */}
            
                {/*  Let's render multiple copies of the Skill component. Make sure you update the source, alt, and title for each icon */}
                <Skill source="https://www.svgrepo.com/show/354512/vercel.svg" alt="The logo icon for vercel" title="Vercel"/>
                <Skill source="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="The logo icon for Next" title="Next"/>
                <Skill source="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor" alt="The logo icon for typescript" title="TypeScripts"/>
                <Skill source="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor" alt="The logo icon for Phyton" title="Phyton"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for figma" title="Figma"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="The logo icon for mongodb" title="MongoDB"/>
               <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="The logo icon for figma" title="Figma"/>
               <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="The logo icon for illustrator" title="Illustrator"/>
               <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="The logo icon for photoshop" title="Photoshop"/>

               
            </div>            
        
       
     </div>
   </div>

   
  </div>
 )
}

export default Skills
