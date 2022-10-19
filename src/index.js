import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './examples/App';
import { store } from './stores/store';
import { Provider } from 'react-redux';
ReactDOM.render(
<Provider store={store}><App />
</Provider>
, document.getElementById('root'));
