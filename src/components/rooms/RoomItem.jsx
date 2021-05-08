import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from "reactstrap";

class RoomItem extends React.PureComponent {

  render() {
    const room = this.props.room;

    return (
      <ListGroupItem>
        { room.temperature }
        { room.id }
        { room.exposure }
        { room.name }
      </ListGroupItem>
    );
  }
}

RoomItem.propTypes = {
  room: PropTypes.object.isRequired,
};


export default RoomItem;