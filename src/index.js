import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom'

import App from 'src/containers/App';

const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <BrowserRouter>
            <HashRouter>
                <Component />
            </HashRouter>
        </BrowserRouter>,
        rootEl
    )
}

renderContainer(App);
