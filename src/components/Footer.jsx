import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
 return (
  
<footer class="p-4 bg-[#074f57] shadow md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2022 <a href="https://flowbite.com/" class="hover:underline">Nora Vargas™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
       <Link to="about" smooth={true} duration={500}>
         About</Link></li>
         <li>
       <Link to="contact" smooth={true} duration={500}>
         Contact</Link></li>
    </ul>
</footer>

 )
}

export default Footer
