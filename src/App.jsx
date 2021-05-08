import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantasticNavbar from "components/nav/navbar/PlantasticNavbar";
import { someOtherArray } from "constants/PlantConstants";
import PlantasticContainer from "components/main/PlantasticContainer";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      plantName: '',
      someSelectField: '333',
      fertilizingFrequency: someOtherArray[someOtherArray.length - 1].value,
      userFullName: '',
      userFullNameDelayed: ''
    };
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     const userFullNameDelayed = Date.now().toString();
  //     this.setState({ userFullNameDelayed });
  //   }, 100)
  // }

  handleUserFullNameChange = (event) => {
    const userFullName = event.target.value;
    console.log('onChange', userFullName);
    this.setState({
      userFullName: userFullName
    });
  };

  handleUserFullNameBlur = (event) => {
    const userFullName = this.state.userFullName;
    console.log('onBlur', userFullName);
    this.setState({
      userFullNameDelayed: userFullName
    });
  };

  delayFetch(ms, func) {
    return new Promise((resolve, reject) => setTimeout(() => func(resolve, reject), ms));
  }

  inputOnChange = (event) => {
    const { currentTarget } = event;
    const { value, name } = currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fertilizingFrequency,
      plantName,
      someSelectField,
      userFullName,
      userFullNameDelayed,
    } = this.state;

    return (
      <Router>
        <PlantasticNavbar
          userFullName={ userFullNameDelayed }
        />
        <PlantasticContainer
          delayFetch={ this.delayFetch }
          someSelectField={ someSelectField }
          fertilizingFrequency={ fertilizingFrequency }
          inputOnChange={ this.inputOnChange }
          plantName={ plantName }
          userFullName={ userFullName }
          userFullNameDelayed={ userFullNameDelayed }
          handleUserFullNameChange={ this.handleUserFullNameChange }
          handleUserFullNameBlur={ this.handleUserFullNameBlur }
        />
      </Router>
    );
  }
}


export default App;
