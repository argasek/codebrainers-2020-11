import React from "react";
import {Card, CardBody, ListGroup} from "reactstrap";
import axios from "axios";
import InProgress from "../shared/InProgress";
import RoomItem from "../rooms/RoomItem";

const ROOMS_FETCH_DELAY = 500;

class Rooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inProgress: false,
      successRooms: undefined,
      rooms: [],
    };
  }
  componentDidMount() {
    this.fetchRooms()
      .finally(() => {
        this.setState({ inProgress: false });
      })
  }

  fetchRooms() {

    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/rooms/';
    this.setState({ inProgress: true });
    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const rooms = data.map((item) => item.name);
          const successRooms = true;
          this.setState({ rooms, successRooms });
          resolve();
        })
        .catch((error) => {
          this.setState({ successRooms: false });
          reject();
        })
        .finally(() => {
          console.log('Resolved');
        });
    });
  }

  render() {
    const {
      inProgress, successRooms, rooms,
    } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={inProgress} />
            {
              successRooms === false &&
              <p>Nie udało się pobrać Pokoi</p>
            }
            {
              successRooms &&
              <ListGroup className="room">
                {
                  rooms.map((item, index, arr) =>
                    <RoomItem
                      room={item}
                      key={index}
                    />
                  )
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )

  }


}


export default Rooms;