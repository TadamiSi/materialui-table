import React, { Component } from "react";
import FilterTable from "./FilterTable.component";

class FilterTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
  }

  render() {
    const { searchValue, data } = this.state;
    const onFilter = event => {
      this.setState({ searchValue: event.target.value });
      data.filter(player =>
        new RegExp(searchValue, "i").test(`${player.first_name}`)
      );
    };
    return (
      <FilterTable data={data} onFilter={onFilter} searchValue={searchValue} />
    );
  }
}

export default FilterTableContainer;
