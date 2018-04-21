import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import FirstMap from "./components/Maps/FirstMap";
import MapConfig from "./components/MapConfig/MapConfig";
import FilterTableContainer from "./components/FilterTable/FilterTable.container";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Leaflet and React-Leaflet
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <FilterTableContainer /> */}
        {/* <FirstMap /> */}
        <MapConfig />
      </div>
    );
  }
}

export default App;
