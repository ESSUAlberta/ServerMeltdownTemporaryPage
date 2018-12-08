import React from 'react';

export default class InformativeTextBox extends React.Component {
    render() {
        return (
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
                {this.props.children ? this.props.children : null}
            </div>
        )
    }
} 