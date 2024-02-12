import React from 'react';
import XIcon from '../../src/assets/Images/twitterx.png'; 
import GitIcon from '../../src/assets/Images/github.png';
import IGIcon from '../../src/assets/Images/instagram.png';
import InIcon from '../../src/assets/Images/linkedin.png';

function Footer() {
  return (
    <div className="footer-container w-full bg-slate-200 dark:bg-slate-700 mt-6">
      <footer className="flex flex-col items-center justify-center p-2 text-slate-700 dark:text-slate-200">
        Copyright © 2024 Aneeshram. All rights reserved.
      </footer>
      <div>
        <a
          className="flex pb-2 justify-center text-slate-800 dark:text-slate-400"
          href="https://react-portfolio-website-wheat-sigma.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Check out my Portfolio!
        </a>
      </div>
      <div className="flex justify-center gap-4 mb-2 rounded-lg">
        <a
          href="https://x.com/aneesh_ram01?t=GmvCmz5DeGtIwL16gio12g&s=08"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-8 h-8 rounded-full" src={XIcon} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/aneeshram-bhat-364a82249/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-8 h-8 rounded-full" src={InIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/aneesh.ram01/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-8 h-8 rounded-full" src={IGIcon} alt="Instagram" />
        </a>
        <a
          href="https://github.com/aneeshram-01"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-8 h-8 rounded-full" src={GitIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
