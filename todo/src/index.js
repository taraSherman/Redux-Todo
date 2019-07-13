import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';
import './index.css';
// all imports

//entry point
// store created
const store = createStore(
  reducer,
  // this allows Redux devtools
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  //App wrapped in provider component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);