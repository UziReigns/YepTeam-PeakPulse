"use client";
import './GoogleMaps.css';
import { APIKEY } from '../../../APIKEY'
import {
    APIProvider,
    Map,
    AdvancedMarker,
} from "@vis.gl/react-google-maps"

function GoogleMaps() {
    let position = { lat: 33.6846, lng: -117.8265}
  return (
   <APIProvider apiKey={APIKEY()}>
        <div style={{height: "500px", width: "500px"}}>
            <Map zoom={14} defaultCenter={position}></Map>
        </div>
    </APIProvider>
  )
}   

export default GoogleMaps