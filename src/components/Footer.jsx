import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 bg-neutral-950 text-neutral-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Contact Information</h2>
          <p>Meerut, Uttar Pradesh, India</p>
          <p>Phone: +91 8881156542</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:your-email@example.com" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail size={24} />
          </a>
          {/* <a href="mailto:your-gmail@example.com" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <SiGmail size={24} />
          </a> */}
          <a href="https://linkedin.com/in/your-profile" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/your-username" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/your-username" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/your-username" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="/path/to/your-resume.pdf" download className="hover:text-cyan-300">
            <FaDownload size={24} />
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
