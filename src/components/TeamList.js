import React, {Component} from 'react';
import Team from './Team';

export default class TeamList extends Component {

    getTeams() {
        return this.props.teams.map((team) => <Team key={team.id} name={team.name} flag={team.flag} />);
    }

    render () {
        return (
            <div className="teams">
                <h2 className="team-list__header">{this.props.title}</h2>
                <div className="team-list">
                    {this.getTeams()}
                </div>
            </div>
        );
    }
}