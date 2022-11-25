import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './Redux/configureStore';
import { getinfoquakes, getinfofeature } from './Redux/Earthquakes/Earthquakes';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(getinfoquakes());
store.dispatch(getinfofeature());
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
