import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Geocode from "react-geocode"

export default class MyMap extends React.Component {

  

  render() {
     return (

  <Map id="mapid" center={[40.785091, -73.968285]} zoom={15}>
        <TileLayer id="mapid"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

        />
        <Marker position={[40.705514, -74.014049]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[40.776326, -73.950721]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

      </Map>

)
}
}

// {this.renderMarkers()}
