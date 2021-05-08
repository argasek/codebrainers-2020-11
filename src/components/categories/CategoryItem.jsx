import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.scss';
import { ListGroupItem } from "reactstrap";
import {appearances, exposures, humidities, temperatures} from "../plants/PlantRow";

class CategoryItem extends React.PureComponent {

  render() {

    return (
      <tr>
        <td>{ this.props.category.id }</td>
        <td>{ this.props.category.name }</td>
        <td><a href={ this.props.category.url } > {this.props.category.name}</a></td>

        {/*<td>{ exposures[this.props.room.exposure] }</td>*/}
        {/*<td>{ humidities[this.props.room.humidity] }</td>*/}
        {/*<td>{ temperatures[this.props.room.temperature] }</td>*/}
        {/*<td>{ appearances[this.props.room.draft] }</td>*/}
      </tr>
    );
  }

}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string,
  isLastItem: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
};


export default CategoryItem;