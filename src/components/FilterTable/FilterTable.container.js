import React, { Component } from "react";
import FilterTable from "./FilterTable.component";

class FilterTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          first_name: "Kasper",
          last_name: "Schmeichel",
          position: "goalkeeper",
          appearances: 260,
          country: "Denmark",
          goals: 0,
          avatar:
            "https://en.wikipedia.org/wiki/File:20140904_-_Kasper_Schmeichel.jpg"
        },
        {
          id: 2,
          first_name: "Wes",
          last_name: "Morgan",
          position: "defender",
          appearances: 234,
          country: "Jamaica",
          goals: 8,
          avatar:
            "https://en.wikipedia.org/wiki/File:Wes_Morgan_Warming_up_vs_Leamington_Spa.jpg"
        },
        {
          id: 3,
          first_name: "Riyad",
          last_name: "Mahrez",
          position: "midfielder",
          appearances: 150,
          country: "Algeria",
          goals: 40,
          avatar:
            "https://en.wikipedia.org/wiki/File:Alg%C3%A9rie_-_Arm%C3%A9nie_-_20140531_-_Riyad_Mahrez.jpg"
        },
        {
          id: 4,
          first_name: "Jamie",
          last_name: "Vardy",
          position: "forward",
          appearances: 197,
          country: "England",
          goals: 76,
          avatar:
            "https://en.wikipedia.org/wiki/File:Jamie_Vardy_08_sierpnia_2015_(cropped).jpg"
        },
        {
          id: 5,
          first_name: "Harry",
          last_name: "Maguire",
          position: "defender",
          appearances: 29,
          country: "England",
          goals: 2,
          avatar: "https://en.wikipedia.org/wiki/File:Harry_Maguire_2016.jpg"
        },
        {
          id: 6,
          first_name: "Shinji",
          last_name: "Okazaki",
          position: "forward",
          appearances: 90,
          country: "Japan",
          goals: 14,
          avatar: "https://en.wikipedia.org/wiki/File:Shinji_okazaki.jpg"
        }
      ]
    };
  }
  render() {
    return <FilterTable data={this.state.data} />;
  }
}

export default FilterTableContainer;
