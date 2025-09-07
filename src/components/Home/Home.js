import React, { useState } from 'react';
import { FaFootballBall, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('current');

  const topTeams = [
    {
      id: 1,
      name: "Washington State Cougars",
      conference: "Pac-12",
      stadium: "Martin Stadium",
      image: "https://www.collegegridirons.com/wp-content/uploads/2017/05/martin.jpeg",
      status: "current"
    },
    {
      id: 2,
      name: "Oregon State Beavers", 
      conference: "Pac-12",
      stadium: "Reser Stadium",
      image: "https://www.collegegridirons.com/wp-content/uploads/2017/05/martin.jpeg",
      status: "current"
    },
    {
      id: 3,
      name: "USC Trojans",
      conference: "Big Ten", 
      stadium: "Los Angeles Memorial Coliseum",
      image: "https://www.collegegridirons.com/wp-content/uploads/2017/04/usc17950.jpg",
      status: "former"
    },
    {
      id: 4,
      name: "Oregon Ducks",
      conference: "Big Ten",
      stadium: "Autzen Stadium", 
      image: "https://www.collegegridirons.com/wp-content/uploads/2017/04/autzen17950.jpg",
      status: "former"
    },
    {
      id: 5,
      name: "Stanford Cardinal",
      conference: "ACC",
      stadium: "Stanford Stadium",
      image: "https://www.collegegridirons.com/wp-content/uploads/2017/05/stanford17950.jpg",
      status: "former"
    }
  ];

  const currentTeams = topTeams.filter(team => team.status === 'current');
  const formerTeams = topTeams.filter(team => team.status === 'former');

  const displayTeams = activeTab === 'current' ? currentTeams : formerTeams;

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      {/* Current/Former Tabs */}
      <div className='flex justify-center mb-8'>
        <div className='bg-gray-100 rounded-lg p-1 flex'>
          <button
            onClick={() => setActiveTab('current')}
            className={`px-6 py-3 rounded-md font-semibold transition-colors ${
              activeTab === 'current'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setActiveTab('former')}
            className={`px-6 py-3 rounded-md font-semibold transition-colors ${
              activeTab === 'former'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Former
          </button>
        </div>
      </div>

      {/* TOP Teams Section */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>TOP Teams</h2>
        <p className='text-gray-600 text-lg'>
          {activeTab === 'current' ? 'Current Pac-12 Members' : 'Former Pac-12 Powerhouses'}
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16'>
        {displayTeams.map((team, index) => (
          <div key={team.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            {/* Team Number Badge */}
            <div className='bg-orange-500 text-white text-center py-2 font-bold text-lg'>
              {team.id}
            </div>
            
            {/* Team Image */}
            <div className='h-48 overflow-hidden'>
              <img 
                src={team.image} 
                alt={team.name}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            
            {/* Team Info */}
            <div className='p-4'>
              <h3 className='font-bold text-lg text-gray-800 mb-2'>{team.name}</h3>
              <div className='flex items-center text-sm text-gray-600 mb-1'>
                <FaTrophy className='mr-2 text-yellow-500' />
                <span className='font-semibold'>{team.conference}</span>
              </div>
              <div className='flex items-center text-sm text-gray-600'>
                <FaMapMarkerAlt className='mr-2 text-blue-500' />
                <span>{team.stadium}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='text-center bg-gray-50 rounded-lg p-8'>
        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
          Explore All Pac-12 Stadiums
        </h3>
        <p className='text-gray-600 mb-6'>
          Discover the rich history and current status of all Pac-12 conference stadiums
        </p>
        <div className='flex justify-center space-x-4'>
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center'>
            <FaMapMarkerAlt className='mr-2' />
            View Stadium Map
          </button>
          <button className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center'>
            <FaFootballBall className='mr-2' />
            Learn History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;