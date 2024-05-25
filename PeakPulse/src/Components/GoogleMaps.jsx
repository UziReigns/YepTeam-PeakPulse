"use client";
import './GoogleMaps.css';
import { APIKEY } from '../../../APIKEY'
import {
    APIProvider,
    Map,
    AdvancedMarker,
} from "@vis.gl/react-google-maps"

function GoogleMaps() {
  return (
   <APIProvider apiKey={APIKEY()}>
        <div style={{height: "100vh"}}>
            <Map zoom={9}></Map>
        </div>
    </APIProvider>
  )
}   

export default GoogleMaps