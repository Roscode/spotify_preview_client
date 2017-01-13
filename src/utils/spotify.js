import fetch from 'isomorphic-fetch';

const search =(query = '', itemType = 'track', limit = 5, offset = 0, market = 'US') => (
  fetch(`https://api.spotify.com/v1/search?q=${query.replace(' ', '+')}&type=${itemType}&limit=${limit}&offset=${offset}&market=${market}`)
)

export default search;
