import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFootballBall } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='max-w-[1640px] mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Section - Social Media */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Social Media</h3>
            <div className='flex space-x-4'>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Center Section - Logo and Description */}
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4'>
              <FaFootballBall className='mr-2 text-orange-500' size={24} />
              <h2 className='text-2xl font-bold'>Pac12<span className='text-orange-500'>Football</span></h2>
            </div>
            <p className='text-gray-300 text-sm'>
              Celebrating the legacy of Pac-12 Conference stadiums and teams
            </p>
          </div>

          {/* Right Section - Quick Links */}
          <div className='text-right'>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <div className='space-y-2'>
              <a href='/' className='block text-gray-300 hover:text-white transition-colors'>Home</a>
              <a href='/about' className='block text-gray-300 hover:text-white transition-colors'>About</a>
              <a href='/history' className='block text-gray-300 hover:text-white transition-colors'>History</a>
              <a href='/conference-map' className='block text-gray-300 hover:text-white transition-colors'>Conference Map</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            © 2024 Pac-12 Stadiums. All rights reserved. | Built with React & Mapbox GL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
