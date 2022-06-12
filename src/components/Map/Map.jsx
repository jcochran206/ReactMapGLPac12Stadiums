import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";


function Map() {
const [viewport, setViewport] = useState({
    latitude: 47.6062,
    longitude: -122.3321,
    zoom: 8,
});


  return (
    
    <div className='box'>
        <ReactMapGL {...viewport} 
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        
        >Markers here
        </ReactMapGL>
    </div>
    
  )
}

export default Map