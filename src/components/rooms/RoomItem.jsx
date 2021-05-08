import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from "reactstrap";

class RoomItem extends React.PureComponent {

  render() {
    const room = this.props.room;

    return (
      <ListGroupItem>
        { room }
      </ListGroupItem>
    );
  }
}

RoomItem.propTypes = {
  room: PropTypes.string.isRequired,
};


export default RoomItem;