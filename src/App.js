import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';
import CounterContainer from './containers/counter-container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CounterContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
