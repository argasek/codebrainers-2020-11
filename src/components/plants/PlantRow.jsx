import React from 'react';

import PropTypes from 'prop-types';

import 'components/plants/PlantRow.scss';
import {
  faCheckCircle,
  faCloud,
  faCloudSun,
  faMoon,
  faQuestion,
  faSun,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faTimesCircle,
  faTint,
  faTintSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plant from 'models/Plant';


const difficulties = {
  1: 'low',
  2: 'medium-low',
  3: 'medium',
  4: 'medium-high',
  5: 'high',
};

const appearances = {
  true: <FontAwesomeIcon icon={ faCheckCircle } />,
  false: <FontAwesomeIcon icon={ faTimesCircle } />,
};

const exposures = {
  dark: <FontAwesomeIcon icon={ faMoon } />,
  shade: <FontAwesomeIcon icon={ faCloud } />,
  partsun: <FontAwesomeIcon icon={ faCloudSun } />,
  fullsun: <FontAwesomeIcon icon={ faSun } />,
};

const humidities = {
  low: <div>
    <FontAwesomeIcon icon={ faTint } />
  </div>,
  medium: <div>
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
  </div>,
  high: <div>
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
    <FontAwesomeIcon icon={ faTint } />
  </div>,
};

const temperatures = {
  cold: <FontAwesomeIcon icon={ faThermometerEmpty } />,
  medium: <FontAwesomeIcon icon={ faThermometerHalf } />,
  warm: <FontAwesomeIcon icon={ faThermometerFull } />,
};


function secondsToDays(sec) {
  const dayInSeconds = 86400;
  if (sec < dayInSeconds) {
    return <FontAwesomeIcon icon={ faQuestion } />;
  } else {
    return Math.round(sec / dayInSeconds);
  }
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  if (dateString === null) {
    return <FontAwesomeIcon icon={ faTintSlash } />;
  } else {
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
}


class PlantRow extends React.PureComponent {

  render() {
    const { index, plant } = this.props;
    const {
      blooming,
      category,
      categorySlug,
      difficulty,
      fertilizingInterval,
      id,
      lastFertilized,
      lastWatered,
      name,
      requiredExposure,
      requiredHumidity,
      requiredTemperature,
      room,
      wateringInterval
    } = plant;

    return (
      <tr>
        <td>{ index } </td>
        <td>{ id } </td>
        <td>{ name }</td>
        <td>{ category }</td>
        <td>{ categorySlug }</td>
        <td>{ secondsToDays(wateringInterval) }</td>
        <td>{ secondsToDays(fertilizingInterval) }</td>
        <td>{ exposures[requiredExposure] }</td>
        <td>{ humidities[requiredHumidity] }</td>
        <td>{ temperatures[requiredTemperature] }</td>
        <td>{ appearances[blooming] }</td>
        <td>{ difficulties[difficulty] }</td>
        <td>{ room }</td>
        <td>{ formatDate(lastWatered) }</td>
        <td>{ formatDate(lastFertilized) }</td>
      </tr>
    );
  }

}


PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
  index: PropTypes.number.isRequired,
};

export { exposures, humidities, temperatures, appearances };
export default PlantRow;
