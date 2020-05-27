import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import { AppState } from './store/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          template-with-store
            <StoreData />
        </p>
      </header>
    </div>
  );
}

export default App;

const StoreData = () => {
    const data = useSelector((state: AppState) => state.dummyReducer.data);
    return <p>dummy store data: {data}</p>
}
