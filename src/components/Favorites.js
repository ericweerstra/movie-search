import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Movie from '../containers/Movie'

const Favorites = ({items}) => {

    const favoriteElement = (item, i) =>
        <li key={`item-${i}`}>
            <Movie data={item}/>
        </li>

    return(
        items.length > 0 && <ul>{ items.map(favoriteElement) }</ul>
    )

}

Favorites.propTypes = {
    items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ items: state.favorites.items })
export default connect(mapStateToProps)(Favorites)