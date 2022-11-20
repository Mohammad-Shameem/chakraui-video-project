import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
