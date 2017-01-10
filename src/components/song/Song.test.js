import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import ConnectedSong,  { Song } from './Song';

// TODO add spies to mock callbacks

describe('Song component', () => {
  const play = jest.fn();
  const pause = jest.fn();
  describe('Presentational component', () => {
    const testTrack = {
      name: "Testing track",
      artists: [
        {
          name: "Testing artist"
        }
      ],
      album: {
        name: "Testing album"
      }
    }
    const testProps = {
      currentTrack: 1,
      idx: 1,
      track: testTrack,
      isPlaying: false,
      play,
      pause
    }
    it('should render a table row with data', () => {
      const wrapper = shallow(<Song { ...testProps } />);
      expect(wrapper.is('tr')).toBe(true);
      wrapper.children().forEach((child) => {
        expect(child.is('td')).toBe(true);
      })
    });
    it('should call play when the playpause button is pressed and the song is paused', () => {
      const wrapper = shallow(<Song { ...testProps } />);
      expect(play.mock.calls.length).toBe(0);
      wrapper.find('button').simulate('click');
      expect(play.mock.calls.length).toBe(1);
      expect(play.mock.calls[0][0]).toBe(testTrack);
    })
    it('should call pause when the playpause button is pressed and the song is playing', () => {
      const pausedProps = {
        ...testProps,
        isPlaying: true
      }
      const wrapper = shallow(<Song { ...pausedProps } />);
      expect(pause.mock.calls.length).toBe(0);
      wrapper.find('button').simulate('click');
      expect(pause.mock.calls.length).toBe(1);
    })
  })
  describe('connected component', () => {

  });
})
