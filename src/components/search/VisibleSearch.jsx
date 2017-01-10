import React from 'react';
const PropTypes = React.PropTypes;

const Search = ({searchContents, btnAvailable, onChange, onSubmit}) => {
  return (
    <form className="mdl-grid" onSubmit={(event) => {
        event.preventDefault();
        onSubmit(searchContents);
      }}>
      <div className="mdl-cell mdl-cell--8-col mdl-textfield mdl-js-textfield">
        <input onChange={(event) => {
            onChange(event.target.value);
          }} className="mdl-textfield__input" type="text" id="sample1"/>
        <label className="mdl-textfield__label" htmlFor="sample1">Search for a song...</label>
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-textfield mdl-js-textfield">
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

Search.propTypes = {
  searchContents: PropTypes.string.isRequired,
  btnAvailable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
 export default Search;
