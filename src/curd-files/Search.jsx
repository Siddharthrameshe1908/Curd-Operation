import React from 'react'
import { IoSearch } from "react-icons/io5";
import types from 'prop-types'

const Search = ({handleSearch}) => {
  return (
    <>
        <div className="searchBlock">
            <input type="text" placeholder='Enter you first name' onInput={(event) => handleSearch(event.target.value)}/>
            <IoSearch/>
        </div>
    </>
  )
}

Search.propTypes = {
  handleSearch : types.object
}

export default Search