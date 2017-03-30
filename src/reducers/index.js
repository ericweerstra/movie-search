import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { SET_VALUE, FETCH_DATA, RECEIVED_DATA, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions'

const data = (state = { value: '', loading: false }, action) => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: action.value,
                result: null
            }
        case FETCH_DATA:
            return {
                ...state,
                loading: true
            }
        case RECEIVED_DATA:
            return {
                ...state,
                loading: false,
                result: action.data
            }
        default:
            return state
    }
}

const favorites = (state = { items: [] }, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: [
                    ...state.items.slice(0, action.index),
                    ...state.items.slice(action.index + 1)
                ]
            }
        default:
            return state
    }
}

export default combineReducers({ routerReducer, data, favorites })