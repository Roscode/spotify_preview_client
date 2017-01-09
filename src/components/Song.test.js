import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import ConnectedSong,  { Song } from './Song';

// TODO add spies to mock callbacks

describe('Song component', () => {
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
      play: (track) => {
        playCalls++;
        playCallArgs.push(track);
      },
      pause: () => {
        pauseCalls++;
      }
    }
    let playCalls = 0;
    let playCallArgs = [];
    let pauseCalls = 0;
    beforeEach(() => {
      playCalls = 0;
      playCallArgs = [];
      pauseCalls = 0;
    })
    it('should render a table row with data', () => {
      const wrapper = shallow(<Song { ...testProps } />);
      expect(wrapper.is('tr')).toBe(true);
      wrapper.children().forEach((child) => {
        expect(child.is('td')).toBe(true);
      })
    });
    it('should call play when the playpause button is pressed and the song is paused', () => {
      const wrapper = shallow(<Song { ...testProps } />);
      expect(playCalls).toBe(0);
      expect(playCallArgs.length).toBe(0);
      wrapper.find('button').simulate('click');
      expect(playCalls).toBe(1);
      expect(playCallArgs[0]).toBe(testTrack);
    })
    it('should call pause when the playpause button is pressed and the song is playing', () => {
      const pausedProps = {
        ...testProps,
        isPlaying: true
      }
      const wrapper = shallow(<Song { ...pausedProps } />);
      expect(pauseCalls).toBe(0);
      wrapper.find('button').simulate('click');
      expect(pauseCalls).toBe(1);
    })
  })
  describe('connected component', () => {

  });
})
