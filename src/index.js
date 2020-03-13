/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function render() {
    const App = require('./App').default;
    const el = document.getElementById('hirosume');
    el &&
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            el,
        );
}
render();
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', render);
}
