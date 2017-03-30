export const SET_VALUE = 'SET_VALUE'
export const FETCH_DATA = 'FETCH_DATA'
export const RECEIVED_DATA = 'RECEIVED_DATA'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const setValue = value => ({
    type: 'SET_VALUE',
    value
})

export const fetchData = () => ({
    type: 'FETCH_DATA'
})

export const receivedData = data => ({
    type: 'RECEIVED_DATA',
    data
})

// todo: handle no-result and error
export const getData = value => dispatch => {
    dispatch(fetchData())
    return fetch(`http://www.omdbapi.com/?t=${value}&plot=short&r=json`)
        .then(response => response.json())
        .then(data => dispatch(receivedData(data)))
}

export const addToFavorites = item => ({
    type: 'ADD_TO_FAVORITES',
    item
})

export const removeFromFavorites = index => ({
    type: 'REMOVE_FROM_FAVORITES',
    index
})