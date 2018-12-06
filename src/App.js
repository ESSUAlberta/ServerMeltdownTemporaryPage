import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img alt="ESS Logo" src={logo} />
          <div
            style={{
              backgroundColor: "#FCFCFC",
              padding: "20px 100px 20px 100px",
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
              marginTop: 20,
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: 16
            }}
          >
            {
              "The previous UAlberta ESS Website is currently down. This is a temporary website. This will be updated regularly over the next few weeks while the new website is developed. For information about our latest events, please refer to the ESS Facebook page. Contact information will be updated soon. For any IT - specific questions, please contact"
            } <a style={{color: "black", textDecoration: "none"}} href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a>{"."}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
