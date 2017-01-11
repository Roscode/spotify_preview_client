import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import ConnectedSongList from './SongList';
import VisibleSongList from './VisibleSongList';
import { createShallowRendererWithStoreContext } from '../../utils/test';
const PropTypes = React.PropTypes;

describe('SongList component', () => {
  describe('Presentational component', () => {
    const testProps = VisibleSongList.sampleProps;

    it('should render a table with a header, header info, and a body', () => {
      const wrapper = shallow(<VisibleSongList { ...testProps  } />);
      expect(wrapper.is('table')).toBe(true);
      expect(wrapper.find('thead').length).toBe(1);
      expect(wrapper.find('tbody').length).toBe(1);
      expect(wrapper.find('th').length).toBe(5);
    });

  });

  describe('connected component', () => {
  });
})
