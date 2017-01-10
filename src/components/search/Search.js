import { connect } from 'react-redux';
import {
  updateSearchContent,
  fetchResults
} from '../../actions/actions.js';
import VisibleSearch from './VisibleSearch';


const mapStateToProps = (state) => {
  return {
    searchContents: state.searchContents,
    btnAvailable: !state.results.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (content) => {
      dispatch(updateSearchContent(content));
    },
    onSubmit: (searchContents) => {
      dispatch(fetchResults(searchContents))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleSearch);
