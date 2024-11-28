import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li>
              <a href="#">Data</a>
              <ul className="dropdown">
                <li><a href="#">Chromatin</a></li>
                <li><a href="#">Proteins</a></li>
              </ul>
            </li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;