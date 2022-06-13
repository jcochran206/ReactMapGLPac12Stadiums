import React, {useState} from 'react';
import ReactMapGL, {FullscreenControl, Marker, Popup} from "react-map-gl";
import pac12Data from "../../data/pac12.json";



function Map() {
const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    zoom: 3,
});
const [selectedItem, setSelectedItem] = useState(null);

  return (
    
    <div className='box'>
        <ReactMapGL {...viewport} 
        style={{width: 800, height: 800}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onMove={(viewport) => {
          setViewport(viewport);
        }}
        >Markers here
        {pac12Data.features.map((item) => (
          <Marker key={item.properties.ID} 
          latitude={item.geometry.coordinates[1]}
          longitude={item.geometry.coordinates[0]}
         
          
          >
            
          </Marker>
        ))}
        
        
        </ReactMapGL>
    </div>
    
  )
}

export default Map