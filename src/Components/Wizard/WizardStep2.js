import React, {Component} from 'react';
import store, {UPDATE_IMG} from '../../donald ducks/store';
import {Link} from 'react-router-dom';

export default class WizardStep2 extends Component {
    constructor() {
        super();

        const reduxState = store.getState();
        this.state = {
            img: reduxState.img
        }
    }

    handleImg = e => {
        store.dispatch({
            type: UPDATE_IMG,
            payload: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Step 2</p>
                <input placeholder='Insert House IMG' onChange={this.handleImg}/>
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/wizard1' ><button>Previous Step</button></Link>
                <Link to='/wizard3' ><button>Next Step</button></Link>
            </div>
        )
    }
}