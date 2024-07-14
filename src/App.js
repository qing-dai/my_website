import React from 'react';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daisy, wie Geth's</h1>
        <p>
            Do what makes you happiest today!
        </p>
        <Clock />
      </header>
      <main>
        <p>This is where your content will go.</p>
      </main>
    </div>
  );
}

export default App;