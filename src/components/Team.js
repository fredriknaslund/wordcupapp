import React, { Component } from 'react';

export default class Team extends Component {
    
    render() {
        return (
            <div className="team-list__item">
                <a href="" className="team-list__link"> 
                    <h2>{this.props.name}</h2> 
                    <img src={this.props.flag} alt=""/>
                </a>
            </div>
        );
    }
}