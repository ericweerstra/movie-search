import React from 'react'
import { connect } from 'react-redux'
import Search from '../containers/Search'
import Movie from '../containers/Movie'

const Home = ({result}) => {
    return(
        <div>
            <h1>Search Movie</h1>
            <Search/>
            { result &&  <Movie data={result}/> }
        </div>
    )

}

const mapStateToProps = state => ({ result: state.data.result })
export default connect(mapStateToProps)(Home)