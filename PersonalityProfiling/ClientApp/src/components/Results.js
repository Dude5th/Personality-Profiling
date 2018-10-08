import React, { Component } from 'react';

export class Results extends Component {

    constructor(props) {
        super(props);

        console.log("state", this.state);
        console.log("props", props);
    }

    render() {
        return (
            <div>
                Results
            </div>
        );
    }
}