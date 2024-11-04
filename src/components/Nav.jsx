import { useState } from 'react';
import { navLinks } from "../constants";
import headerLogo from "../assets/logo/logo-light.png";
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {

   // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   
      <header className="absolute z-30 w-full top-0 left-0 px-6">
         <nav className="flex justify-between items-center gap-16 container lg:padding ">
            <a href="/">
               <img 
                  src={headerLogo} 
                  alt="logo" 
                  width={120}
               />
            </a>

            <ul className="flex gap-16 max-lg:hidden">
               {navLinks.map((item) => (
                  <li key={item.label}>
                     <a
                        href={item.href}
                        className='font-poppins leading-bold tracking-wide text-lg text-dirty-white hover:text-green-500 hover:duration-200'
                     >
                        {item.label}
                     </a>
                  </li>
               ))}
            </ul>

            <div className='pb-4 hidden max-lg:block'>
               <FaAlignJustify
                  className='text-dirty-white text-xl'
                  onClick={toggleMobileMenu}
               />
            </div>


            {/* Mobile Menu - Conditionally rendered based on state */}
            {isMobileMenuOpen && (
               <ul className="flex flex-col items-start gap-5 absolute top-20 left-0 px-10 w-full py-4 max-lg:flex bg-[rgba(16,16,16,0.9)] ">
                  {navLinks.map((item) => (
                  <li key={item.label}>
                     <a
                        href={item.href}
                        className="font-poppins leading-bold tracking-wide text-lg text-dirty-white hover:text-green-500 hover:duration-200"
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                     >
                        {item.label}
                     </a>
                  </li>
                  ))}
               </ul>
            )}

         </nav>
      </header>

  )
}

export default Nav