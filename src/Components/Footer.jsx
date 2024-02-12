import React from 'react';
import XIcon from '../../src/assets/Images/twitterx.png'; 
import GitIcon from '../../src/assets/Images/github.png';
import IGIcon from '../../src/assets/Images/instagram.png';
import InIcon from '../../src/assets/Images/linkedin.png';

function Footer() {
  return (
    <div className="w-full absolute bottom-0 bg-slate-200  dark:bg-slate-700 mt-6 flex flex-col">
      <div className="flex justify-center p-2 text-slate-700 dark:text-slate-200">
        Copyright © 2024 Aneeshram. All rights reserved.
      </div>
      <div>
     <a
          className="flex pb-2 justify-center text-slate-800 dark:text-slate-400"
          href="https://react-portfolio-website-wheat-sigma.vercel.app/"
          rel="noopener noreferrer" // Added for security
          target="_blank" // Optional to open in new tab 
          > 
       Check out my Portfolio!
        </a>
     </div>
      <div className="justify-center object-cover flex  gap-4  mb-2 rounded-lg">
        <a
          href="https://x.com/aneesh_ram01?t=GmvCmz5DeGtIwL16gio12g&s=08"
          rel="noopener noreferrer" // Added for security
          target="_blank" // Optional to open in new tab
        >
          <img className="w-8 h-8 rounded-full" src={XIcon} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/aneeshram-bhat-364a82249/"
          rel="noopener noreferrer" // Added for security
          target="_blank" // Optional to open in new tab
        >
          <img className="w-8 h-8 rounded-full" src={InIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/aneesh.ram01/"
          rel="noopener noreferrer" // Added for security
          target="_blank" // Optional to open in new tab
        >
          <img className="w-8 h-8 rounded-full" src={IGIcon} alt="Instagram" />
        </a>
        <a
          href="https://github.com/aneeshram-01"
          rel="noopener noreferrer" // Added for security
          target="_blank" // Optional to open in new tab
        >
          <img className="w-8 h-8 rounded-full" src={GitIcon} alt="GitHub" />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
