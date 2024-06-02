"use client";
import './GoogleMaps.css';
import { APIKEY , MAPID} from '../../../APIKEY'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
} from "@vis.gl/react-google-maps"

function GoogleMaps() {
    let position = { lat: 33.6846, lng: -117.8265}
  return (
    <APIProvider apiKey={APIKEY()}>
        <div style={{height: "500px", width: "500px"}}>
            <Map defaultZoom={14} defaultCenter={position} mapId={MAPID()}>
              <AdvancedMarker position={position}>
                <Pin background={"blue"}/>
              </AdvancedMarker>
            </Map>
        </div>
    </APIProvider>
  )
}   

export default GoogleMaps