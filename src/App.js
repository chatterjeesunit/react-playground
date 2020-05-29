import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemTableView from './components/Catalog/ItemTableView'

function App() {
  return (
    <div>
      <header className="App-header">
        <table>
          <tr>
            <td><img src={logo} className="App-logo" alt="logo" /></td>
            <td>ReactJS Playground</td>
          </tr>
        </table>
      </header>
      <ItemTableView />
    </div>
  );
}

export default App;
