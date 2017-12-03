import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from 'src/containers/App';

const rootEl = document.getElementById('root');

const renderContainer = Component => {
    render(
        <AppContainer>
            <div className='app'>
                <Component />
            </div>
        </AppContainer>,
        rootEl
    )
}

renderContainer(App)

if (module.hot) module.hot.accept('./containers/App', () => renderContainer(App));
