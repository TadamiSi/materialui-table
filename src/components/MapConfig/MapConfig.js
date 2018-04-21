import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { InputLabel } from "material-ui/Input";
import Typography from "material-ui/Typography";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
// import FirstMap from "../Maps/FirstMap";
import DynamicMap from "../Maps/DynamicMap";
import StatesMap from "../Maps/StatesMap";
import { data } from "../../data/data";
import { getStates } from "../../data/states";

export default class MapConfig extends Component {
  state = {
    selectedBaseMap: "",
    selectedDatasource: ""
  };

  handleChange = event => {
    this.setState({ selectedBaseMap: event.target.value });
  };
  handleDatasourceChange = event => {
    let mapData = {};
    if (event.target.value === "states") {
      mapData = getStates().features;
    } else {
      mapData = data()[event.target.value];
    }
    console.log(mapData);
    this.setState({
      data: mapData,
      selectedDatasource: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="config-section">
          <Card className="card">
            <CardContent>
              <Typography variant="headline" component="h2">
                Basemap
              </Typography>
              <div>
                <Select
                  value={this.state.selectedBaseMap}
                  onChange={this.handleChange}
                  //   inputProps={{
                  //     name: "age",
                  //     id: "age-simple"
                  //   }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    value={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                  >
                    Open Street Map
                  </MenuItem>
                  <MenuItem
                    value={
                      "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    }
                  >
                    Black and White
                  </MenuItem>
                  <MenuItem
                    value={"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"}
                  >
                    Open Topo Map
                  </MenuItem>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <Typography variant="headline" component="h2">
                Datasource
              </Typography>
              <div>
                <Select
                  value={this.state.selectedDatasource}
                  onChange={this.handleDatasourceChange}
                  //   inputProps={{
                  //     name: "age",
                  //     id: "age-simple"
                  //   }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"soccerPlayers"}>Soccer Players</MenuItem>
                  <MenuItem value={"stores"}>Stores</MenuItem>
                  <MenuItem value={"states"}>States</MenuItem>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
        {this.state.selectedDatasource &&
          this.state.selectedBaseMap &&
          this.renderMap()}
      </div>
    );
  }

  renderMap() {
    const { selectedDatasource, data, selectedBaseMap } = this.state;
    switch (selectedDatasource) {
      case "states":
        return <StatesMap basemap={selectedBaseMap} data={data} />;
      default:
        return <DynamicMap basemap={selectedBaseMap} data={data} />;
    }
  }
}
