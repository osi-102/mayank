import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 bg-neutral-950 text-neutral-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-center">Contact Information</h2>
          <p className="text-center">Meerut, Uttar Pradesh, India</p>
          <p className="text-center">Phone: +91 8881156542</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:2003mayankchauhan.b@gmail.com" title="Email" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mayank-chauhan2003" title="LinkedIn" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/osi-102" title="GitHub" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/your-username" title="Twitter" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
          <a href="https://instagram.com/your-username" title="Instagram" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="/MayankChauhan.pdf" title="Download Resume" download className="hover:text-cyan-300">
            <BsFillPersonLinesFill size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mayank Chauhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
