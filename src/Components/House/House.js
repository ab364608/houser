import React, {Component} from 'react';


export default class House extends Component {
    render() {
        const {name, address, city, state, zipcode, img, mortage, rent} = this.props.house
        return (
            <div>
                <h2>Property Name: {name}</h2>
                <h3>Address: {address}</h3>
                <h3>City: {city}</h3>
                <h3>State: {state}</h3>
                <h4>Zipcode: {zipcode}</h4>
                <img src={img} alt="house"/>
                <h3>Preferred Mortage: {mortage}</h3>
                <h3>Preferred Rent: {rent}</h3>
                <button onClick={() => this.props.deleteHouse(this.props.house.id)}>Delete</button>
            </div>
        )
    }
}