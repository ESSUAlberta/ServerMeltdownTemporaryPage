import React from 'react';
import logo from "../logo.svg"
import InformativeTextBox from '../Components/InformativeTextBox';

export default class CareerFair extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <a href="/"><img alt="ESS Logo" src={logo} /></a>
                    <InformativeTextBox>
                        <h1>For Employers</h1>
                        Reprehenderit esse quis id sit aliqua enim reprehenderit labore minim proident duis pariatur et. Labore tempor quis nostrud pariatur minim aliquip esse ullamco velit non. Minim labore aute magna esse ad id duis consectetur enim excepteur. Duis mollit ut ex do. Lorem Lorem commodo aliquip est qui qui ex ea ipsum Lorem cupidatat nisi elit.
                    </InformativeTextBox>
                    <InformativeTextBox>
                        <h1>For Students</h1>
                        Reprehenderit esse quis id sit aliqua enim reprehenderit labore minim proident duis pariatur et. Labore tempor quis nostrud pariatur minim aliquip esse ullamco velit non. Minim labore aute magna esse ad id duis consectetur enim excepteur. Duis mollit ut ex do. Lorem Lorem commodo aliquip est qui qui ex ea ipsum Lorem cupidatat nisi elit.
                    </InformativeTextBox>
                </div>
            </div>
        );
    }
}