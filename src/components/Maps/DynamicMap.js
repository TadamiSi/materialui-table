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
export default class DynamicMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 4
  };

  render() {
    const url = this.props.basemap;
    const data = this.props.data;
    const position = [data[0].lat, data[0].lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url={url}
        />
        {data.map(item => (
          <CircleMarker
            key={item.id}
            center={[item.lat, item.lng]}
            color="red"
            radius={10}
          >
            <Tooltip>
              <span>Tooltip for CircleMarker</span>
            </Tooltip>
            <Popup>
              <span>Simon Test</span>
            </Popup>
          </CircleMarker>
        ))}
      </Map>
    );
  }
}

DynamicMap.defaultProps = {
  basemap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  data: []
};
DynamicMap.propTypes = {
  basemap: PropTypes.string,
  data: PropTypes.array
};
