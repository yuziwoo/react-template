import './css/reset.css';
import './jw/jw-library.css';
import { JwLibrary } from './jw/jw-library.js';

import {useState, useEffect} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {

  window.jw = new JwLibrary();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Link to="/about">어바웃페이지로 이동</Link>} />
        <Route path="/about" element={<Link to="/">메인페이지로 이동</Link>} />
      </Routes>
      <main className="jw">
        <p>hi</p>
      </main>
    </div>
  );
}

export default App;