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
              backgroundColor: "#F8F8F8",
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
              "The previous UAlberta ESS Website is currently down. This is a temporary website. This will be updated regularly over the next few weeks while the new website is developed. For information about our latest events, please refer to the ESS Facebook page."
            }
          </div>

          { false ?
            <div
              style={{
                backgroundColor: "#F8F8F8",
                padding: "20px 100px 20px 100px",
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
                marginTop: 20,
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: 16
              }}
            >
              <h1>
                <a className="headerHyperlink" style={{ color: "black", textDecoration: "none", fontWeight: "600" }} href="/career-fair">
                  {"Career Fair"}
                </a>
              </h1>
              {
                "Nulla ad commodo exercitation adipisicing pariatur elit. Esse sint aliqua ut occaecat. Voluptate irure anim esse velit adipisicing incididunt ullamco adipisicing cupidatat pariatur."
              } <a style={{ color: "black", textDecoration: "none", fontWeight: "600" }} href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a>{"."}
            </div> : null
          }

          <div
            style={{
              backgroundColor: "#F8F8F8",
              padding: "20px 100px 20px 100px",
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
              marginTop: 20,
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: 16
            }}
          >
            <h1 style={{ fontWeight: "300" }}>
              {"Contact Information"}
            </h1>
            <div style={{ textAlign: "center" }}>
              <div style={{ textAlign: "left", display: "inline-block" }}>
                {"Director of IT :"} <br />
                {"Information :"} <br />
                <br />
              </div>
              <div style={{ textAlign: "left", display: "inline-block" }}>
                <a style={{ color: "black", textDecoration: "none", fontWeight: "600" }} href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a> <br />
                <a style={{ color: "black", textDecoration: "none", fontWeight: "600" }} href="mailto:president@ess.ualberta.ca">president@ess.ualberta.ca</a>{" or "} <br />
                <a style={{ color: "black", textDecoration: "none", fontWeight: "600" }} href="mailto:info@ess.ualberta.ca">info@ess.ualberta.ca</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
