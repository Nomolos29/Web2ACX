import React from 'react';
import Logo from './logo.svg';
import './App.css';

function Message({person}) {
    return (
        <h1>{person} just hacked this, Yeh!!</h1>  
    );
};

function Nomolos() {
    return (
        <div className="App">
            <header className="App-header">
                <Message person={"Nomolos"}/>
                <img src={Logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
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

export default Nomolos;