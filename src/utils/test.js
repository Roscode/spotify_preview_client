import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

export function createRendererWithStoreContext(renderer, component, state = {}, options = {}) {
    return (props) => {
        return renderer(
            React.createElement(component, props),
            {
                context: { store: mockStore(state) },
                childContextTypes: {
                    store: PropTypes.object
                },
                ...options
            }
        );
    };
}

export function createShallowRendererWithStoreContext(component, state, options) {
    return createRendererWithStoreContext(shallow, component, state, options);
}
