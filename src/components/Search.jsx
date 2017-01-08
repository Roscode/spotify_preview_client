import React from 'react';
import { connect } from 'react-redux';
import {
  updateSearchContent,
  fetchResults
} from '../actions/actions.js';

const search = ({searchContents, btnAvailable, onChange, onClick}) => {
  return (
    <form className="pure-form pure-g" onSubmit={(event) => {
        event.preventDefault();
        onClick(searchContents);
      }}>
      <div className="pure-u-2-3">
        <input className="pure-input-1" value={searchContents} onChange={onChange} type="text" placeholder="Search for a song you like"/>
      </div>
      <div className="pure-u-1-3">
        <button className={`${btnAvailable ? "" : "pure-button-disabled"} pure-button pure-input-1`} value="Search" type="submit">Search</button>
      </div>
    </form>
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
