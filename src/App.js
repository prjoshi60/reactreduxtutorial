import React from 'react';
import './App.css';
import Page from './components/Page';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducer from './components/source/reducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
        <Page />
     </Provider>
  );
}

export default App;
