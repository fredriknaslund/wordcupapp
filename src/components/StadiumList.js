import React, { Component } from 'react';
import Stadium from "./Stadium";

export default class StadiumList extends Component {


    render () {
        const Stadiums = this.props.stadiums.map((stadium) => <Stadium key={stadium.id} name={stadium.name} city={stadium.city} image={stadium.image} />);
        return (
            <div className="stadiums">
                <h2 className="stadium-list__header">{this.props.title}</h2>
                <div className="stadium-list">
                    {Stadiums}
                </div>
            </div>
        );
    }

}