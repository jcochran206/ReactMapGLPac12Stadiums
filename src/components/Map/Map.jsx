import React, {useState} from 'react';
import ReactMapGL, {FullscreenControl, Marker, Popup} from "react-map-gl";
import pac12Data from "../../data/pac12.json";

function Map() {
const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    zoom: 3,
});

const [showPopup, setShowPopup] = useState(null);


  return (
    
    <div className='box'>
      <ReactMapGL className='styledmap' {...viewport} 
        style={{width: 800, height: 800}}
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
          </Marker> 
          
         ))}
         {showPopup && (
          <Popup longitude={showPopup.geometry.coordinates[0]} latitude={showPopup.geometry.coordinates[1]}
            anchor="bottom"
            onClose={() => setShowPopup(null)}>
            <div className='mapinfo'>
            <h3>{showPopup.properties.NAME}</h3>
            <p>{showPopup.properties.Tenant}</p>
              
            </div>
          </Popup>)}
          <FullscreenControl/>
        </ReactMapGL>
    </div>
    
  )
}

export default Map