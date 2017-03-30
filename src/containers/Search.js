import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm'
import { setValue, getData } from '../actions'

class Search extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    onChange = e => this.props.dispatch(setValue(e.target.value))

    onSubmit = e => {
        e.preventDefault()
        const { value, dispatch } = this.props
        dispatch(getData(value));
    }

    render() {
        return(
            <section>
                <SearchForm onSubmit={this.onSubmit} onChange={this.onChange} value={this.props.value}/>
                { this.props.loading && <div>Loading...</div> }
            </section>
        )
    }

}

const mapStateToProps = state => ({ value: state.data.value, loading: state.data.loading })
export default connect(mapStateToProps)(Search)