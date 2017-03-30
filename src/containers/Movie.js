import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../actions'
import MovieDetail from '../components/MovieDetail'

class Movie extends Component {

    static propTypes = {
        favorites: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
    }

    addToFavoritesClick = () => {
        this.props.dispatch(addToFavorites(this.props.result))
    }

    removeFromFavoritesClick = () => {
        this.props.dispatch(removeFromFavorites(this.favoriteIndex))
    }

    get favoriteIndex() {
        return this.props.favorites.findIndex(obj => obj.imdbID === this.props.data.imdbID)
    }

    render() {
        return(
            <MovieDetail
                favoriteIndex={this.favoriteIndex}
                data={this.props.data}
                removeFromFavoritesClick={this.removeFromFavoritesClick}
                addToFavoritesClick={this.addToFavoritesClick}/>
        )
    }
}

const mapStateToProps = state => ({ result: state.data.result, favorites: state.favorites.items })
export default connect(mapStateToProps)(Movie)