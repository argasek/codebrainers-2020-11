import React from "react";
import {exposures, humidities, temperatures, appearances} from "components/plants/PlantRow";
import  {Button} from 'reactstrap';


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
        <td> <Button onClick={()=> this.props.removeRoom(this.props.index)}> Remove Room </Button> </td>
      </tr>
    )
  }
}

export default Room;
