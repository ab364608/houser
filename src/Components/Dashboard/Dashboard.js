import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_HOUSE_LIST} from '../../donald ducks/store';
import axios from 'axios'

//Components
import House from '../House/House';

export default class Dashboard extends Component {
    constructor() {
        super();

        const reduxState = store.getState();
        this.state = {
            houseList: reduxState.houseList
        }
    }

    componentDidMount() {
        this.getHouseList();
        const reduxState = store.getState();
        store.subscribe(() => {
            this.setState({houseList: reduxState.houseList})
        })
    }

    getOneHouse = () => {
        axios.get(`/api/house/${+this.props.match.params.id}`).then(() => {
            return this.state.houseList[0]
        })
    }

    getHouseList = () => {
        axios.get('/api/houses')
        .then(houses => {
            store.dispatch({
                type: UPDATE_HOUSE_LIST,
                payload: houses.data
            })
        }).catch(err => console.log(err))
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
        .then(house => {
            store.dispatch({
                type: UPDATE_HOUSE_LIST,
                payload: house.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
            const mappedHouse = this.state.houseList.map((val, i) => {
                return (
                    <House 
                    key={i}
                    house={val}
                    houseList={this.state.houseList}
                    deleteHouse={this.deleteHouse}
                    />
                )
            })
        return (
            <div>
            <p>Dashboard</p>
            <Link to='/wizard1'><button>Add New Property</button></Link>
            <Link to='/:id' ><button onClick={() => this.getOneHouse(+this.props.match.params.id)}>Preview A House</button></Link>
            {mappedHouse}
            </div>
        )
    }
}