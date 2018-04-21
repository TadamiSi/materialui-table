import React, { Component } from "react";
import PropTypes from "prop-types";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import { Typography, Toolbar, TextField } from "material-ui";

class FilterTable extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchValue: ""
    };
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {this.renderToolbar()}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell numeric>Appearances</TableCell>
              <TableCell numeric>Goals</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.first_name} {row.last_name}
                  </TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.appearances}</TableCell>
                  <TableCell>{row.goals}</TableCell>
                  <TableCell>{row.country}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }

  renderToolbar() {
    const { data, onFilter } = this.props;
    return (
      <Toolbar className="toolbar">
        <Typography color="inherit" type="body1">
          Showing {data.length} players
        </Typography>
        <TextField
          className="textFieldInput"
          InputProps={{ disableUnderline: true }}
          default="Search cards"
          margin="normal"
          onChange={onFilter}
          value={this.props.searchValue}
        />
      </Toolbar>
    );
  }
}

FilterTable.propTypes = {
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func
};
export default FilterTable;
