import React, { PropTypes } from 'react'

const MovieDetail = ({ favoriteIndex, data, removeFromFavoritesClick, addToFavoritesClick }) => {

    const { Title, Poster } = data

    return (
        <article>
            <h1>{Title}</h1>
            <img src={Poster} alt="Poster"/>
            {
                favoriteIndex > -1 ?
                    <button onClick={removeFromFavoritesClick}>Remove</button> :
                    <button onClick={addToFavoritesClick}>Add to Favorites</button>
            }
        </article>
    )
}

MovieDetail.propTypes = {
    favoriteIndex: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    removeFromFavoritesClick: PropTypes.func.isRequired,
    addToFavoritesClick: PropTypes.func.isRequired
}

export default MovieDetail