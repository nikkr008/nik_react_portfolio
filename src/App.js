// src/App.js
import React from 'react';
import Routes from './routes/Routes';
import './App.css'
import { ThemeProvider } from './utils/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
