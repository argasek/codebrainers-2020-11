import React from "react";
import {exposures, humidities, temperatures, appearances} from "components/plants/PlantRow";


class Room extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.room.id }</td>
        <td>{ this.props.room.name }</td>
        <td>{ exposures[this.props.room.exposure] }</td>
        <td>{ humidities[this.props.room.humidity] }</td>
        <td>{ temperatures[this.props.room.temperature] }</td>
        <td>{ appearances[this.props.room.draft] }</td>
      </tr>
    )
  }
}

export default Room;
