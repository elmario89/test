import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/containers/App';

const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        rootEl
    )
}

renderContainer(App);
