import React from 'react';
import logo from '../logo.svg';
import InformativeTextBox from '../Components/InformativeTextBox';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <img alt="ESS Logo" src={logo} />
          <InformativeTextBox>
            The previous UAlberta ESS Website is currently down. This is a temporary website. This will be updated regularly over the next few weeks while the new website is developed. For information about our latest events, please refer to the ESS Facebook page.
          </InformativeTextBox>

          {false ?
            <InformativeTextBox>
              <h1><a className="headerHyperlink" href="/career-fair">{"Career Fair"}</a></h1>
              {"Nulla ad commodo exercitation adipisicing pariatur elit. Esse sint aliqua ut occaecat. Voluptate irure anim esse velit adipisicing incididunt ullamco adipisicing cupidatat pariatur."} <a href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a>{"."}
            </InformativeTextBox>
            : null
          }

          <InformativeTextBox>
            <h1 style={{ fontWeight: "300" }}>{"Contact Information"}</h1>
            <div style={{ textAlign: "center" }}>
              <div style={{ textAlign: "left", display: "inline-block" }}>
                {"Director of IT :"} <br />
                {"Information :"} <br />
                <br />
              </div>
              <div style={{ textAlign: "left", display: "inline-block" }}>
                <a href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a> <br />
                <a href="mailto:president@ess.ualberta.ca">president@ess.ualberta.ca</a>{" or "} <br />
                <a href="mailto:info@ess.ualberta.ca">info@ess.ualberta.ca</a>
              </div>
            </div>
          </InformativeTextBox>
        </div>
      </div>
    );
  }
}

export default Home;
