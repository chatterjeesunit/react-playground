import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/Router'

function App() {
  return (
    <div>
      <header className="App-header">
        <table>
          <tbody>
            <tr>
              <td><img src={logo} className="App-logo" alt="logo" /></td>
              <td>ReactJS Playground</td>
            </tr>
          </tbody>
        </table>
      </header>
      <AppRouter />
    </div>
  );
}

export default App;
