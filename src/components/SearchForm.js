import React, { PropTypes } from 'react'

const SearchForm = ({ onSubmit, onChange, value }) => (
    <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}/>
        <button type="submit">Search</button>
    </form>
)

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default SearchForm