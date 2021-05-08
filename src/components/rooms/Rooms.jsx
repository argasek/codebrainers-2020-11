import React from "react";
import { Card, CardBody, Table } from "reactstrap";
import axios from "axios";
import Room from "components/rooms/Room";
import InProgress from "components/shared/InProgress";


const ROOMS_FETCH_DELAY = 250;

class Rooms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      successRooms: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/rooms/";
    this.setState({inProgress: true});

    return this.props.delayFetch(ROOMS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => {
          const data = response.data;
          console.log(data);
          const rooms = data.map((item) => {
            const {
              id,
              name,
              exposure,
              temperature,
              humidity,
              draft,
            } = item;
            return {
              id,
              name,
              exposure,
              temperature,
              humidity,
              draft,
            }
          });
          const successRooms = true;
          this.setState({rooms, successRooms});
          resolve();
        })
        .catch((error) => {
          this.setState({successRooms: false});
          reject();
        })
        .finally(() => {
          this.setState({inProgress: false});
        })
    });
  }

  render() {
    const {rooms, successRooms, inProgress} = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <InProgress inProgress={inProgress}/>
          {
            successRooms === false &&
            <p>Unable to fetch rooms.</p>
          }
          {
            successRooms && (
              <>
              <Table>
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Exposure</th>
                  <th>Humidity</th>
                  <th>Temperature</th>
                  <th>Draft</th>
                </tr>
                </thead>
                <tbody>
                {
                  rooms.map((room, index, arr) => (
                          <Room room={room} key={index} index={index}/>)
                  )
                }
                </tbody>
              </Table>
              </>
          )}
        </CardBody>
      </Card>
    );
  }
}

export default Rooms;