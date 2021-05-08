import { Card, CardBody, Table } from "reactstrap";
import React from "react";
import "./Plants.scss";
import PropTypes from "prop-types";
import axios from "axios";
import PlantRow from "components/plants/PlantRow";
import InProgress from "components/shared/InProgress";
import Plant from 'models/Plant';


const PLANTS_FETCH_DELAY = 250;

class Plants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      successPlants: undefined,
      inProgress: false,
    };
  }

  componentDidMount() {
    this.fetchPlants();
  }

  fetchPlants() {
    const requestUrl = "http://gentle-tor-07382.herokuapp.com/plants/";
    this.setState({ inProgress: true });

    return this.props.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
      const promise = axios.get(requestUrl);

      promise
        .then((response) => this.fetchPlantsSuccess(response, resolve))
        .catch((error) => this.fetchPlantsError(error, reject))
        .finally(() => this.setState({ inProgress: false }));
    });
  }

  fetchPlantsSuccess(response, resolve) {
    const data = response.data;
    const plants = data.map((item) => {
      const plant = new Plant();
      return plant.fromPlain(item);
    });
    const successPlants = true;
    this.setState({ plants, successPlants });
    resolve();
  }

  fetchPlantsError(error, reject)  {
    this.setState({ successPlants: false });
    reject();
  }

  render() {
    const { plants, successPlants, inProgress } = this.state;

    return (
            <Card className="mb-4">
              <CardBody>
                <InProgress inProgress={ inProgress } />
                {
                  successPlants === false &&
                  <p>Unable to fetch plants.</p>
                }
                {
                  successPlants && (
                          <div className="plants-container">
                            <Table>
                              <thead className="plants-container-header">
                              <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Category Slug</th>
                                <th>Watering Interval</th>
                                <th>Fertilizing Interval</th>
                                <th>Required Exposure</th>
                                <th>Required Humidity</th>
                                <th>Required Temperature</th>
                                <th>Blooming</th>
                                <th>Difficulty</th>
                                <th>Room</th>
                                <th>Last Watered</th>
                                <th>Last Fertilized</th>
                              </tr>
                              </thead>
                              <tbody>
                              {
                                plants.map((plant, index, arr) => (
                                        <PlantRow plant={ plant } key={ index } index={index + 1} />)
                                )
                              }
                              </tbody>
                            </Table>
                          </div>
                  ) }
              </CardBody>
            </Card>
    );
  }
}

Plants.propTypes = {
  delayFetch: PropTypes.func.isRequired,
};

export default Plants;
