import React from 'react';
import './App.css';
import StudentItem from './components/StudentItem';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exampleStudent: 'Jarosław I wspaniały',
            secondStudent: ''


        };
    }

    onChangeExampleStudent = (event) => {
        console.log(this);
        // this.state.exampleStudent = event.target.value;
        this.setState({exampleStudent: event.target.value});
        console.log('Zaszła zmiana!', this.state.exampleStudent);
    }
    onChangeSecondStudent = (event) => {
        console.log(this);
        // this.state.exampleStudent = event.target.value;
        this.setState({secondStudent: event.target.value});
        console.log('Zaszła zmiana w drugim polu!', this.state.secondStudent);
    }

    render() {

        console.log(this.state.exampleStudent);
        console.log(this);


        return (
            <div style={{backgroundColor: '#ddd', padding: '4rem'}}>
                <StudentItem fullName={this.state.exampleStudent}/>
                <StudentItem fullName={this.state.secondStudent}/>
                <form>
                    <input
                        value={this.state.exampleStudent}
                        type="text"
                        style={{
                            marginLeft: '1rem',
                            padding: '0.5rem',
                            border: '2px solid #00F',
                            borderRadius: '4px',
                            fontSize: '150%'
                        }}
                        onChange={this.onChangeExampleStudent}
                    />
                    <input
                        value={this.state.secondStudent}
                        type="text"
                        style={{
                            margin: '1rem',
                            padding: '0.5rem',
                            border: '2px solid #F00',
                            borderRadius: '4px',
                            fontSize: '150%'
                        }}
                        onChange={this.onChangeSecondStudent}
                    />
                </form>
            </div>
        );
    }
}

export default App;
