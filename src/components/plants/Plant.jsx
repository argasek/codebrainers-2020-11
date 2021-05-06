import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';

class Plant extends React.PureComponent {

  render() {

    return (
      <div>
        <p>{ this.props.plant.id } { ' '} { this.props.plant.name }</p>
      </div>
    )
  }

}

Plant.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
};

export default Plant;