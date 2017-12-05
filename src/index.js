import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/containers/App';

const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
        rootEl
    )
}

renderContainer(App);

if (module.hot) module.hot.accept('./containers/App', () => renderContainer(App));
