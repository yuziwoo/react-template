/* eslint-disable */
import './css/reset.css';
import './jw/jw-library.css';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

import Main from "./routes/Main.js";

function App() {
  let store = useSelector((state) => { return state });
  let dispatch = useDispatch();

  useEffect(() => {
    jw.onStart();
    return () => {
      jw.onEnd();
    }
  }, [store.jwState])

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;