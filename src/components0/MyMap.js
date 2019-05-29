import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MyMap extends React.Component {


renderMarkers = () => {
  console.log(this.props.nearbyUsers)
  return this.props.nearbyUsers.map(user => {
    console.log(user.latitude)
    return <Marker position={[user.latitude, user.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  })
}



  render() {
     return (
       <div>

          <Map id="mapid" center={[40.785091, -73.968285]} zoom={10}>
            <TileLayer id="mapid"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          />


        {this.renderMarkers()}



      </Map>
      </div>

)
}
}
