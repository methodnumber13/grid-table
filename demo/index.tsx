import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
// import './styles/main.scss';
import 'regenerator-runtime/runtime';
import 'core-js/stable';

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: unknown;
        accept(dependencies: string[], callback?: (updatedDependencies: ModuleId[]) => void): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: unknown) => void): void;
    };
}

const render = (RenderedApp: React.FC) => {
    ReactDOM.render(
        <AppContainer>
            <RenderedApp />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // Get the updated code
        render(NextApp);
    });
}
