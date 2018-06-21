import React, { Component } from "react";
import StadiumList from './StadiumList';
import TeamList from './TeamList';
import GroupList from "./GroupList";

import "../styles/App.css";

import data from '../../data.json';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: "World Cup 2018",
            stadiums: data.stadiums,
            groups: data.groups,
            teams: data.teams
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <StadiumList title="Stadiums" stadiums={this.state.stadiums} />
                <TeamList title="Teams" teams={this.state.teams} />
                <GroupList title="Groups" groups={this.state.groups} />
            </div>
        );
    }
}
