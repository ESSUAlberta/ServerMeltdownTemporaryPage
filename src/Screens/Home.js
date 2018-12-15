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

          {true ? //write false to disable this section
            <InformativeTextBox>
              <h1><a className="headerHyperlink" href="/career-fair">{"Career Fair"}</a></h1>
              The 19th Annual ESS Career Fair will run on January 9 and 10, 2019 from 10 AM to 3 PM, in the Engineering Teaching and Learning Complex Solarium on the University of Alberta North Campus.<br /> <br />

              With over 4500 undergraduate students and 1500 graduate students from 9 engineering disciplines, the ESS Career Fair provides a great opportunity for engineering companies to connect face-to-face with some of the brightest engineering minds in Canada.<br /><br />

              Questions? Contact us at{" "}
              <a href="mailto:director.careerfair@ess.ualberta.ca">director.careerfair@ess.ualberta.ca</a>{"."}
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
