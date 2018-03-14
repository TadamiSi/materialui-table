import React, { Component } from "react";
import PropTypes from "prop-types";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";

class FilterTable extends Component {
  render() {
    const { data } = this.props;
    return (
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
    );
  }
}

FilterTable.propTypes = {
  data: PropTypes.array.isRequired
};
export default FilterTable;
