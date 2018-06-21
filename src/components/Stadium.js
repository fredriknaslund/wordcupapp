import React, { Component } from 'react';

export default class Stadium extends Component {

    render() {
        return (
            <div className="stadium-list__item">
                <a href="" className="stadium-list__link">
                    <h2 className="stadium-list__header">{this.props.name}</h2> 
                    <img src={this.props.image} alt="" />
                    <h3 className="stadium-list__subheader">{this.props.city}</h3>
                </a>
            </div>
        );
    }
}