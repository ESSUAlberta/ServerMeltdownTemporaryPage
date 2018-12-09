import React from 'react';
import logo from '../../logo.svg';
import InformativeTextBox from '../../Components/InformativeTextBox';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <a href="/"><img src={logo} alt="ESS Logo" /></a>
                    <InformativeTextBox>
                        Looks like this page does not exist. Think this might be a mistake? Contact <a href="mailto:director.it@ess.ualberta.ca">director.it@ess.ualberta.ca</a>. Click the Logo to go back home.
                    </InformativeTextBox>
                </div>
            </div>
        );
    }
}