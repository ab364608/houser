import { createStore } from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    houseList: [],
    img: '',
    mortage: 0,
    rent: 0
}

export const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const UPDATE_HOUSE_LIST = 'UPDATE_HOUSE_LIST';
export const UPDATE_IMG = 'UPDATE_IMG';
export const UPDATE_MORTAGE = 'UPDATE_MORTAGE';
export const UPDATE_RENT = 'UPDATE_RENT';

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_PROPERTY_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: payload
            }
        case UPDATE_STATE:
            return {
                ...state,
                state: payload
            }
        case UPDATE_ZIPCODE:
            return {
                ...state,
                zipcode: payload
            }
        case UPDATE_HOUSE_LIST:
            return {
                ...state,
                houseList: payload
            }
        case UPDATE_IMG:
            return {
                ...state,
                img: payload
            }
        case UPDATE_MORTAGE:
            return {
                ...state,
                mortage: payload
            }
        case UPDATE_RENT:
            return {
                ...state,
                rent: payload
            }

        default: return state;
    }
}

export default createStore(reducer);