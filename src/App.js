import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axiosMain from "./lib/network/axiosMain";

class App extends Component {

    handleGetRooms = () => {
        console.log('get rooms')
        axiosMain.get('/api/1/rooms/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    handleShowEnvVars = () => {
        console.log('handleShowEnvVars');
        console.log(process.env);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello pvc
                    </p>
                    <button onClick={this.handleGetRooms}>get rooms</button>
                    <button onClick={this.handleShowEnvVars}>show env vars</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
