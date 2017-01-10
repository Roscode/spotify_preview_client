import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import ConnectedSong from './Song';
import VisibleSong from './VisibleSong';
import { createShallowRendererWithStoreContext } from '../../utils/test';
const PropTypes = React.PropTypes;

describe('Song component', () => {
  describe('Presentational component', () => {
    const play = jest.fn();
    const pause = jest.fn();
    const testProps = { ...VisibleSong.sampleProps, play, pause };

    it('should render a table row with data', () => {
      const wrapper = shallow(<VisibleSong { ...testProps } />);
      expect(wrapper.is('tr')).toBe(true);
      wrapper.children().forEach((child) => {
        expect(child.is('td')).toBe(true);
      })
    });

    it('should call play when the playpause button is pressed and the song is paused', () => {
      const wrapper = shallow(<VisibleSong { ...testProps } />);
      expect(play.mock.calls.length).toBe(0);
      wrapper.find('button').simulate('click');
      expect(play.mock.calls.length).toBe(1);
      expect(play.mock.calls[0][0]).toBe(testProps.track);
    });

    it('should call pause when the playpause button is pressed and the song is playing', () => {
      const pausedProps = {
        ...testProps,
        playing: true
      }
      const wrapper = shallow(<VisibleSong { ...pausedProps } />);
      expect(pause.mock.calls.length).toBe(0);
      wrapper.find('button').simulate('click');
      expect(pause.mock.calls.length).toBe(1);
    });
  });

  describe('connected component', () => {
    const buildBaseProps = () => ({
      track: {
        preview_url: 'https://p.scdn.co/mp3-preview/d0f8166b16772d350909bd87e34cf0ef1041b010?cid=null',
        id: '27BpBnTNtY9SBrE3EusnM6',
        name: 'Islands',
        artists: [
          {
            name: 'The xx'
          }
        ],
        album: {
          name: 'xx'
        }
      },
      index: 0
    })
    const buildBaseState = () => ({
      playing: false,
      currentTrack: ''
    })
    const renderShallow = createShallowRendererWithStoreContext(ConnectedSong, buildBaseState());
    let props, wrapper, track, visibleSong;
    beforeEach(() => {
      props = buildBaseProps();
      wrapper = renderShallow(props);
      track = props.track;
      visibleSong = wrapper.find('Song');
    });

    it('sets the selected prop', () => {
      expect(visibleSong.prop('selected')).toBe(false);
    });

    it('sets the playing prop', () => {
      expect(visibleSong.prop('playing')).toBe(false);
    });

    it('sets the track prop', () => {
      expect(visibleSong.prop('track')).toBe(track);
    });

    it('sets the index prop', () => {
      expect(visibleSong.prop('index')).toBe(1)
    })
  });
})
