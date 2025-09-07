import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const History = () => {
  const [activeTeam, setActiveTeam] = useState('usc');
  const [openFAQ, setOpenFAQ] = useState(null);

  const teams = {
    usc: {
      name: "USC Trojans",
      founded: "1880",
      joinedPac12: "1915",
      leftPac12: "2024",
      newConference: "Big Ten",
      championships: "11 National Championships",
      stadium: "Los Angeles Memorial Coliseum",
      notable: "Heisman Trophy winners, Rose Bowl victories"
    },
    ucla: {
      name: "UCLA Bruins", 
      founded: "1919",
      joinedPac12: "1928",
      leftPac12: "2024",
      newConference: "Big Ten",
      championships: "1 National Championship",
      stadium: "Rose Bowl",
      notable: "Basketball dynasty, Olympic athletes"
    },
    oregon: {
      name: "Oregon Ducks",
      founded: "1876",
      joinedPac12: "1915",
      leftPac12: "2024", 
      newConference: "Big Ten",
      championships: "Multiple Pac-12 Championships",
      stadium: "Autzen Stadium",
      notable: "Innovative uniforms, Nike partnership"
    },
    washington: {
      name: "Washington Huskies",
      founded: "1861",
      joinedPac12: "1915",
      leftPac12: "2024",
      newConference: "Big Ten", 
      championships: "1 National Championship",
      stadium: "Husky Stadium",
      notable: "Purple and gold tradition, Apple Cup rivalry"
    },
    stanford: {
      name: "Stanford Cardinal",
      founded: "1891",
      joinedPac12: "1918",
      leftPac12: "2024",
      newConference: "ACC",
      championships: "2 National Championships",
      stadium: "Stanford Stadium", 
      notable: "Academic excellence, Olympic success"
    },
    cal: {
      name: "California Golden Bears",
      founded: "1868",
      joinedPac12: "1915",
      leftPac12: "2024",
      newConference: "ACC",
      championships: "Multiple Pac-12 Championships",
      stadium: "California Memorial Stadium",
      notable: "Big Game rivalry, academic prestige"
    },
    washingtonstate: {
      name: "Washington State Cougars",
      founded: "1890",
      joinedPac12: "1917",
      leftPac12: "N/A",
      newConference: "Pac-12",
      championships: "Multiple Pac-12 Championships",
      stadium: "Martin Stadium",
      notable: "Air Raid offense, Pullman traditions"
    },
    oregonstate: {
      name: "Oregon State Beavers",
      founded: "1868",
      joinedPac12: "1915",
      leftPac12: "N/A",
      newConference: "Pac-12",
      championships: "Multiple Pac-12 Championships",
      stadium: "Reser Stadium",
      notable: "Civil War rivalry, orange and black"
    },
    colorado: {
      name: "Colorado Buffaloes",
      founded: "1876",
      joinedPac12: "2011",
      leftPac12: "2024",
      newConference: "Big 12",
      championships: "1 National Championship",
      stadium: "Folsom Field",
      notable: "Return to Big 12, Ralphie the Buffalo"
    },
    utah: {
      name: "Utah Utes",
      founded: "1850",
      joinedPac12: "2011",
      leftPac12: "2024",
      newConference: "Big 12",
      championships: "Multiple Mountain West Championships",
      stadium: "Rice-Eccles Stadium",
      notable: "Mountain West dominance, Salt Lake traditions"
    },
    arizona: {
      name: "Arizona Wildcats",
      founded: "1885",
      joinedPac12: "1978",
      leftPac12: "2024",
      newConference: "Big 12",
      championships: "Multiple Pac-12 Championships",
      stadium: "Arizona Stadium",
      notable: "Desert Swarm defense, Tucson traditions"
    },
    arizonastate: {
      name: "Arizona State Sun Devils",
      founded: "1885",
      joinedPac12: "1978",
      leftPac12: "2024",
      newConference: "Big 12",
      championships: "Multiple Pac-12 Championships",
      stadium: "Sun Devil Stadium",
      notable: "Sparky mascot, Tempe traditions"
    }
  };

  const faqs = [
    {
      id: 1,
      question: "When was the Pac-12 Conference founded?",
      answer: "The Pac-12 Conference was founded in 1915 as the Pacific Coast Conference (PCC). It evolved through several name changes before becoming the Pac-12 in 2011."
    },
    {
      id: 2,
      question: "Why did teams leave the Pac-12?",
      answer: "Teams left due to financial pressures, media rights deals, and conference realignment. The Big Ten and Big 12 offered more lucrative television contracts and stability."
    },
    {
      id: 3,
      question: "Which teams remain in the Pac-12?",
      answer: "As of 2024, only 4 teams remain: Stanford, Cal, Washington State, and Oregon State. These are sometimes called the 'Pac-4' or 'G4'."
    },
    {
      id: 4,
      question: "What is the future of the Pac-12?",
      answer: "The remaining teams are exploring options including merging with other conferences or forming a new conference structure."
    },
    {
      id: 5,
      question: "What was the Rose Bowl's relationship to the Pac-12?",
      answer: "The Rose Bowl was the traditional Pac-12 champion's destination for decades, creating the 'Granddaddy of Them All' tradition."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      {/* Page Header */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>Pac-12 History</h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          From its founding in 1915 to its final season in 2024, explore the rich history of the Pac-12 Conference
        </p>
      </div>

      {/* Timeline Section */}
      <div className='bg-gray-50 rounded-lg p-8 mb-12'>
        <h2 className='text-3xl font-bold text-center mb-8'>Conference Timeline</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center'>
            <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaCalendarAlt size={24} />
            </div>
            <h3 className='text-xl font-bold mb-2'>1915</h3>
            <p className='text-gray-600'>Pacific Coast Conference founded</p>
          </div>
          <div className='text-center'>
            <div className='bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaTrophy size={24} />
            </div>
            <h3 className='text-xl font-bold mb-2'>2011</h3>
            <p className='text-gray-600'>Becomes Pac-12 Conference</p>
          </div>
          <div className='text-center'>
            <div className='bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className='text-xl font-bold mb-2'>2024</h3>
            <p className='text-gray-600'>Final season, major realignment</p>
          </div>
        </div>
      </div>

      {/* Team Tabs Section */}
      <div className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-8'>Team Histories</h2>
        
        {/* Team Tab Navigation */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {Object.entries(teams).map(([key, team]) => (
            <button
              key={key}
              onClick={() => setActiveTeam(key)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTeam === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {team.name}
            </button>
          ))}
        </div>

        {/* Team Information Display */}
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>{teams[activeTeam].name}</h3>
              <div className='space-y-3'>
                <div className='flex items-center'>
                  <FaCalendarAlt className='mr-3 text-blue-600' />
                  <span className='font-semibold'>Founded:</span>
                  <span className='ml-2'>{teams[activeTeam].founded}</span>
                </div>
                <div className='flex items-center'>
                  <FaTrophy className='mr-3 text-yellow-600' />
                  <span className='font-semibold'>Joined Pac-12:</span>
                  <span className='ml-2'>{teams[activeTeam].joinedPac12}</span>
                </div>
                <div className='flex items-center'>
                  <FaMapMarkerAlt className='mr-3 text-red-600' />
                  <span className='font-semibold'>Left Pac-12:</span>
                  <span className='ml-2'>{teams[activeTeam].leftPac12}</span>
                </div>
                <div className='flex items-center'>
                  <FaTrophy className='mr-3 text-green-600' />
                  <span className='font-semibold'>New Conference:</span>
                  <span className='ml-2'>{teams[activeTeam].newConference}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-3'>Achievements</h4>
              <p className='text-gray-700 mb-4'>{teams[activeTeam].championships}</p>
              
              <h4 className='text-xl font-bold mb-3'>Stadium</h4>
              <p className='text-gray-700 mb-4'>{teams[activeTeam].stadium}</p>
              
              <h4 className='text-xl font-bold mb-3'>Notable</h4>
              <p className='text-gray-700'>{teams[activeTeam].notable}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='mb-12'>
        <h2 className='text-3xl font-bold text-center mb-8'>Frequently Asked Questions</h2>
        <div className='max-w-4xl mx-auto'>
          {faqs.map((faq) => (
            <div key={faq.id} className='bg-white rounded-lg shadow-md mb-4'>
              <button
                onClick={() => toggleFAQ(faq.id)}
                className='w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors'
              >
                <h3 className='text-lg font-semibold'>{faq.question}</h3>
                {openFAQ === faq.id ? (
                  <FaChevronUp className='text-blue-600' />
                ) : (
                  <FaChevronDown className='text-blue-600' />
                )}
              </button>
              {openFAQ === faq.id && (
                <div className='px-6 pb-6'>
                  <p className='text-gray-700'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Section */}
      <div className='bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-8 text-white text-center'>
        <h2 className='text-3xl font-bold mb-4'>The Pac-12 Legacy</h2>
        <p className='text-xl mb-6 max-w-3xl mx-auto'>
          For over a century, the Pac-12 Conference shaped college athletics on the West Coast, 
          producing champions, legends, and unforgettable moments that will live on forever.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          <div>
            <h3 className='text-2xl font-bold mb-2'>109 Years</h3>
            <p>Of conference history</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-2'>12 Teams</h3>
            <p>At its peak membership</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-2'>Countless</h3>
            <p>Champions and memories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;