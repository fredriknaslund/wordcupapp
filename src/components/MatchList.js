import React, { Component } from "react";

import Match from './Match';

export default class MatchList extends Component {

    render() {
        return (
            <ul>
                { 
                    this.props.matches.map((match, key) => {
                        return <Match title={ match.title } key="{ key }" />;
                    })
                }
            </ul>
        );
    }
}