import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
  GeoJSON
} from "react-leaflet";

// useful article on getting GeoJson to work:
// https://github.com/PaulLeCam/react-leaflet/issues/176

export default class StatesMap extends Component {
  state = {
    zoom: 4
  };
  render() {
    const url = this.props.basemap;
    const states = this.props.data;
    const position = [45.052732, -93.365555];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url={url}
        />
        <GeoJSON data={states} style={this.getStyle} />
      </Map>
    );
  }

  getStyle(feature, layer) {
    return {
      color: "#006400",
      weight: 5,
      opacity: 0.65
    };
  }
  getColor(d) {
    return d > 1000
      ? "#800026"
      : d > 500
        ? "#BD0026"
        : d > 200
          ? "#E31A1C"
          : d > 100
            ? "#FC4E2A"
            : d > 50
              ? "#FD8D3C"
              : d > 20
                ? "#FEB24C"
                : d > 10
                  ? "#FED976"
                  : "#FFEDA0";
  }
}

StatesMap.defaultProps = {
  basemap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  data: []
};
StatesMap.propTypes = {
  basemap: PropTypes.string,
  data: PropTypes.array
};
