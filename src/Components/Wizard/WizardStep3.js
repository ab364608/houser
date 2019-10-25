import React, { Component } from 'react';
import axios from 'axios'
import store, { UPDATE_MORTAGE, UPDATE_RENT } from '../../donald ducks/store';
import {Link} from 'react-router-dom';

export default class WizardStep3 extends Component {
    constructor() {
        super();

        const reduxState = store.getState();
        this.state = {
            mortage: reduxState.mortage,
            rent: reduxState.rent
        }
    }

    hanldeMortage = e => {
        store.dispatch({
            type: UPDATE_MORTAGE,
            payload: e.target.value
        })
    }
    handleRent = e => {
        store.dispatch({
            type: UPDATE_RENT,
            payload: e.target.value
        })
    }

    createHouse = () => {
        const reduxState = store.getState();
        axios.post('/api/houses', {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            img: reduxState.img,
            mortage: reduxState.mortage,
            rent: reduxState.rent
        })
    }

    componentDidMount() {
        const reduxState = store.getState();
        store.subscribe(() => {
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode,
                img: reduxState.img,
                mortage: reduxState.mortage,
                rent: reduxState.rent
            })
        })
    }

    render() {
        return (
            <div>
                <p>Step 3</p>
                <input placeholder="Preferred Mortage" onChange={this.hanldeMortage} />
                <input placeholder="Preferred Rent" onChange={this.handleRent} />
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/wizard2'><button>Previous Step</button></Link>
                <Link to='/'><button onClick={this.createHouse} >Complete</button></Link>
            </div>
        )
    }
}