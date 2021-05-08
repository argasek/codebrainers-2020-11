import React from "react";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import {ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_PREFERENCES, ROUTE_ROOMS} from "constants/Routes";
import Plants from "components/plants/Plants";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';
import Preferences from "components/preferences/Preferences";

class PlantasticContainer extends React.PureComponent {

  render() {
    const {
      delayFetch,
      fertilizingFrequency,
      inputOnChange,
      plantName,
      someSelectField,
      userFullName,
      userFullNameDelayed,
      handleUserFullNameChange,
      handleUserFullNameBlur
    } = this.props;

    return (
      <Container>
        <Switch>
          <Route exact path={ROUTE_PLANTS}>
            <PlantCreate
              fertilizingFrequency={fertilizingFrequency}
              inputOnChange={inputOnChange}
              plantName={plantName}
              someSelectField={someSelectField}
            />
            <Plants
              delayFetch={delayFetch}
            />
          </Route>
          <Route path={ROUTE_CATEGORIES}>
            <Categories
              delayFetch={delayFetch}
            />
          </Route>
          <Route path={ROUTE_ROOMS}>
            <Rooms
              delayFetch={delayFetch}
            />
          </Route>
          <Route path={ROUTE_PREFERENCES}>
            <Preferences
              userFullName={userFullName}
              userFullNameDelayed={userFullNameDelayed}
              handleUserFullNameChange={handleUserFullNameChange}
              handleUserFullNameBlur={handleUserFullNameBlur}
            />
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default PlantasticContainer;
