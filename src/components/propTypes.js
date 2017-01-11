import React from 'react';
const PropTypes = React.PropTypes;

export const trackPropType =
  PropTypes.shape({
    preview_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  })
