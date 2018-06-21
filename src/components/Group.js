import React, { Component } from 'react';

export default class Group extends Component {

    render() {
        return (
            <div className="group-list__item">
                <a href="" className="group-list__link"> 
                    <h2>{this.props.name}</h2> 
                </a>
            </div>
        );
    }
}