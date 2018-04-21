import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip
} from "react-leaflet";
import { storesData } from "../../data/data";
import PropTypes from "prop-types";
export default class FirstMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 4
  };

  render() {
    const stores = storesData();
    const url = this.props.basemap;
    console.log(url);
    console.log(stores);
    const position = [stores[0].lat, stores[0].lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url={url}
        />
        {stores.map(store => (
          <CircleMarker
            key={store.store_num}
            center={[store.lat, store.lng]}
            color="red"
            radius={10}
          >
            <Tooltip>
              <span>Tooltip for CircleMarker</span>
            </Tooltip>
            <Popup>
              <span>{store.store_name}</span>
            </Popup>
          </CircleMarker>
          // <Marker position={position}>
          //   <Popup>
          //     <span>
          //       A pretty CSS3 popup. <br /> Easily customizable.
          //     </span>
          //   </Popup>
          // </Marker>
        ))}
      </Map>
    );
  }
}

FirstMap.defaultProps = {
  basemap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};
FirstMap.propTypes = {
  basemap: PropTypes.string
};
