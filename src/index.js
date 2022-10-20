import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // connects redux store to react
import store from './store/index'; // tell react the location of store and set = to store prop on provider tag

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />{' '}
	</Provider>
);
