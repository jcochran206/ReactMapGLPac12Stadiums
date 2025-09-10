import React, {useState} from 'react';
import ReactMapGL, {FullscreenControl, Marker, Popup} from "react-map-gl";
import { FaFootballBall, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import pac12Data from "../../data/pac12.json";

function Map() {
const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    zoom: 3,
    style: 'mapbox://styles/mapbox/standard-satellite',
});

const [showPopup, setShowPopup] = useState(null);
const location = useLocation();
const isConferenceMapPage = location.pathname === '/conference-map';

// Function to get marker color based on status
const getMarkerColor = (status) => {
  switch(status) {
    case 'Current':
      return '#10B981'; // Green for current members
    case 'Former':
      return '#EF4444'; // Red for former members
    default:
      return '#6B7280'; // Gray for unknown
  }
};

// Function to get conference color
const getConferenceColor = (conference) => {
  switch(conference) {
    case 'Big Ten':
      return '#1E40AF'; // Blue
    case 'ACC':
      return '#059669'; // Green
    case 'Big 12':
      return '#DC2626'; // Red
    case 'Pac-12':
      return '#F59E0B'; // Orange
    default:
      return '#6B7280'; // Gray
  }
};

  return (
    <div className={isConferenceMapPage ? 'h-screen' : 'max-w-[1640px] mx-auto p-4'}>
      {/* Map Legend - only show on non-conference-map pages */}
      {!isConferenceMapPage && (
        <div className='mb-4 bg-white rounded-lg shadow-md p-4'>
          <h3 className='text-lg font-bold mb-3'>Map Legend</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h4 className='font-semibold mb-2'>Team Status</h4>
              <div className='flex items-center space-x-4'>
                <div className='flex items-center'>
                  <div className='w-4 h-4 bg-green-500 rounded-full mr-2'></div>
                  <span className='text-sm'>Current Pac-12</span>
                </div>
                <div className='flex items-center'>
                  <div className='w-4 h-4 bg-red-500 rounded-full mr-2'></div>
                  <span className='text-sm'>Former Pac-12</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className='font-semibold mb-2'>New Conferences</h4>
              <div className='flex items-center space-x-4'>
                <div className='flex items-center'>
                  <div className='w-4 h-4 bg-blue-600 rounded-full mr-2'></div>
                  <span className='text-sm'>Big Ten</span>
                </div>
                <div className='flex items-center'>
                  <div className='w-4 h-4 bg-green-600 rounded-full mr-2'></div>
                  <span className='text-sm'>ACC</span>
                </div>
                <div className='flex items-center'>
                  <div className='w-4 h-4 bg-red-600 rounded-full mr-2'></div>
                  <span className='text-sm'>Big 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ReactMapGL {...viewport} 
        style={{
          position: 'relative', 
          width: '100%', 
          height: isConferenceMapPage ? '90vh' : '500px'
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onMove={(viewport) => {
          setViewport(viewport);
        }}
        >
        {pac12Data.features.map((item) => (
          <Marker key={item.properties.ID} 
          latitude={item.geometry.coordinates[1]}
          longitude={item.geometry.coordinates[0]}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            console.log('item from map marker ..',item)
            setShowPopup(item)
          }} 
          >
            <div 
              className='cursor-pointer transform hover:scale-110 transition-transform duration-200'
              style={{
                color: getMarkerColor(item.properties.Status),
                fontSize: '24px'
              }}
            >
              <FaMapMarkerAlt />
            </div>
          </Marker> 
          
         ))}
         {showPopup && (
          <Popup longitude={showPopup.geometry.coordinates[0]} latitude={showPopup.geometry.coordinates[1]}
            anchor="bottom"
            onClose={() => setShowPopup(null)}>
            <div className='mapinfo p-4 min-w-[250px]'>
              <h3 className='text-lg font-bold mb-2'>{showPopup.properties.NAME}</h3>
              <p className='text-gray-600 mb-2'>{showPopup.properties.Tenant}</p>
              
              <div className='space-y-2 text-sm'>
                <div className='flex items-center'>
                  <span className='font-semibold mr-2'>Status:</span>
                  <span 
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      showPopup.properties.Status === 'Current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {showPopup.properties.Status}
                  </span>
                </div>
                
                <div className='flex items-center'>
                  <span className='font-semibold mr-2'>Current Conference:</span>
                  <span 
                    className='px-2 py-1 rounded text-xs font-semibold text-white'
                    style={{backgroundColor: getConferenceColor(showPopup.properties.CurrentConference)}}
                  >
                    {showPopup.properties.CurrentConference}
                  </span>
                </div>
                
                <div className='flex items-center'>
                  <span className='font-semibold mr-2'>Capacity:</span>
                  <span>{showPopup.properties.Capacity}</span>
                </div>
                
                <div className='flex items-center'>
                  <span className='font-semibold mr-2'>Location:</span>
                  <span>{showPopup.properties.City}, {showPopup.properties.State}</span>
                </div>
              </div>
              
              {showPopup.properties.imgUrl && (
                <img 
                  src={showPopup.properties.imgUrl} 
                  alt={showPopup.properties.NAME}
                  className='w-full h-32 object-cover rounded mt-3'
                />
              )}
            </div>
          </Popup>)}
          <FullscreenControl/>
        </ReactMapGL>
    </div>
    
  )
}

export default Map