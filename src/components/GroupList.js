import React, { Component } from 'react';
import Group from './Group';

export default class GroupList extends Component {

    getGroups() {
        return Object.keys(this.props.groups).map((group) => <Group key={group} name={group} />);
    }

    render() {
        return (
            <div className="groups">
                <h2 className="group-list__header">{this.props.title}</h2>
                <div className="group-list">
                    {this.getGroups()}
                </div>
            </div>
        );
    }
}