import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_PROPERTY_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE} from '../../donald ducks/store';
// import axios from 'axios';


export default class Wizard extends Component {
    constructor() {
        super();
        
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
        }
    }

    // componentDidMount() {
    //     const reduxState = store.getState();
    //     store.subscribe(() => {
    //         this.setState({
    //             name: reduxState.name,
    //             address: reduxState.address,
    //             city: reduxState.city,
    //             state: reduxState.state,
    //             zipcode: reduxState.zipcode
    //         })
    //     })
    // }

    handlePropertyName = e => {
        store.dispatch({
            type: UPDATE_PROPERTY_NAME,
            payload: e.target.value
        })
    }
    handleAddress = e => {
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: e.target.value
        })
    }
    handleCity = e => {
        store.dispatch({
            type: UPDATE_CITY,
            payload: e.target.value
        })
    }
    handleState = e => {
        store.dispatch({
            type: UPDATE_STATE,
            payload: e.target.value
        })
    }
    handleZipcode = e => {
        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: e.target.value
        })
    }

    // createHouse = () => {
    //     const reduxState = store.getState();
    //     axios.post('/api/houses', {
    //         name: reduxState.name,
    //         address: reduxState.address,
    //         city: reduxState.city,
    //         state: reduxState.state,
    //         zipcode: reduxState.zipcode
    //     })
    // }


    render() {
        return (
            <div>
                <p>Step 1</p>
                <input placeholder='Property Name' onChange={this.handlePropertyName} />
                <input placeholder='Address' onChange={this.handleAddress} />
                <input placeholder='City' onChange={this.handleCity} />
                <input placeholder='State' onChange={this.handleState} />
                <input placeholder='Zipcode' onChange={this.handleZipcode} />
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/wizard2'><button>Next Step</button></Link>
            </div>
        )
    }
}