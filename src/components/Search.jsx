import React from 'react';
import { connect } from 'react-redux';
import {
  updateSearchContent,
  fetchResults
} from '../actions/actions.js';

const search = ({searchContents, btnAvailable, onChange, onClick}) => {
  return (
    <div>
      <input value={searchContents} onChange={onChange} type="text" placeholder="Search for a song you like"/>
      <button onClick={() => onClick(searchContents)} disabled={!btnAvailable}>Search</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchContents: state.searchContents,
    btnAvailable: !state.results.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(updateSearchContent(event.target.value));
    },
    onClick: (searchContents) => {
      dispatch(fetchResults(searchContents))
    }
  }
}

const Search = connect(mapStateToProps, mapDispatchToProps)(search);

export default Search;
