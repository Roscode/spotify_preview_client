import React from 'react';

const Search = () => {
  return (
    <div style={ {display : 'inline-block'} }>
      <input type="text" placeholder="Search for a song you like"/>
      <button>Search</button>
    </div>
  );
}

export default Search;
