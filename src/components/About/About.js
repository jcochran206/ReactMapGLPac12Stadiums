import React from 'react';
import { FaTrophy, FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import pac12Data from "../../data/pac12.json";

const About = () => {
  const totalStadiums = pac12Data.features.length;
  const totalCapacity = pac12Data.features.reduce((sum, stadium) => {
    return sum + parseInt(stadium.properties.Capacity.replace(/,/g, ''));
  }, 0);

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      {/* Page Header */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>About Pac-12 Conference</h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Discover the rich history and current status of the Pac-12 Conference stadiums
        </p>
      </div>

      {/* Mission Statement */}
      <div className='bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>Conference Legacy</h2>
        <p className='text-xl max-w-4xl mx-auto'>
          The Pac-12 Conference has been home to some of the most iconic college football stadiums 
          and legendary teams in NCAA history. From the Rose Bowl to Autzen Stadium, these venues 
          have witnessed countless championship moments and unforgettable games.
        </p>
      </div>

      {/* Statistics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
        <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
          <FaMapMarkerAlt className='text-blue-600 mx-auto mb-4' size={32} />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>{totalStadiums}</h3>
          <p className='text-gray-600'>Stadiums Tracked</p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
          <FaUsers className='text-orange-500 mx-auto mb-4' size={32} />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>{totalCapacity.toLocaleString()}</h3>
          <p className='text-gray-600'>Total Capacity</p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
          <FaCalendarAlt className='text-green-600 mx-auto mb-4' size={32} />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>109</h3>
          <p className='text-gray-600'>Years of History</p>
        </div>
        <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
          <FaTrophy className='text-yellow-600 mx-auto mb-4' size={32} />
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>12</h3>
          <p className='text-gray-600'>Total Stadiums</p>
        </div>
      </div>

      {/* Conference Status */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6'>Current Status</h3>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <div className='w-4 h-4 bg-red-500 rounded-full mr-3'></div>
              <span className='font-semibold'>Former Members:</span>
              <span className='ml-2 text-gray-600'>8 teams</span>
            </div>
            <div className='flex items-center'>
              <div className='w-4 h-4 bg-green-500 rounded-full mr-3'></div>
              <span className='font-semibold'>Remaining Members:</span>
              <span className='ml-2 text-gray-600'>4 teams</span>
            </div>
            <div className='flex items-center'>
              <div className='w-4 h-4 bg-blue-500 rounded-full mr-3'></div>
              <span className='font-semibold'>New Conferences:</span>
              <span className='ml-2 text-gray-600'>Big Ten, ACC, Big 12</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6'>Conference Realignment</h3>
          <div className='space-y-3'>
            <div className='border-l-4 border-blue-600 pl-4'>
              <h4 className='font-semibold'>Big Ten (4 teams)</h4>
              <p className='text-gray-600 text-sm'>USC, UCLA, Oregon, Washington</p>
            </div>
            <div className='border-l-4 border-green-600 pl-4'>
              <h4 className='font-semibold'>ACC (2 teams)</h4>
              <p className='text-gray-600 text-sm'>Stanford, California</p>
            </div>
            <div className='border-l-4 border-orange-600 pl-4'>
              <h4 className='font-semibold'>Big 12 (2 teams)</h4>
              <p className='text-gray-600 text-sm'>Arizona, Arizona State, Utah, Colorado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stadium Highlights */}
      <div className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-8'>All Pac-12 Stadiums</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {pac12Data.features.map((stadium) => (
            <div key={stadium.properties.ID} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='h-48 overflow-hidden'>
                <img 
                  src={stadium.properties.imgUrl} 
                  alt={stadium.properties.NAME}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-bold text-lg text-gray-800 mb-2'>{stadium.properties.NAME}</h3>
                <p className='text-gray-600 text-sm mb-2'>{stadium.properties.Tenant}</p>
                <div className='mb-2'>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    stadium.properties.Status === 'Current' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {stadium.properties.Status}
                  </span>
                  <span className='ml-2 px-2 py-1 rounded text-xs font-semibold text-white bg-blue-600'>
                    {stadium.properties.CurrentConference}
                  </span>
                </div>
                <div className='flex justify-between text-sm text-gray-500'>
                  <span>Capacity: {stadium.properties.Capacity}</span>
                  <span>{stadium.properties.City}, {stadium.properties.State}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center bg-gray-50 rounded-lg p-8'>
        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
          Explore Conference History
        </h3>
        <p className='text-gray-600 mb-6'>
          Discover the rich history and stories of all Pac-12 teams and their conference affiliations
        </p>
        <div className='flex justify-center space-x-4'>
          <a 
            href='/history' 
            className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center'
          >
            <FaTrophy className='mr-2' />
            Learn History
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;