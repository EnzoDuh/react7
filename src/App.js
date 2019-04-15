import React, { Component } from "react";
import "./App.css";
import FormFilms from "./MyFilms";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FormFilms />
                </header>
            </div>
        );
    }
}

export default App;
