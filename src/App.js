/* eslint-disable */
import './css/reset.css';
import './jw/jw-library.css';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

import Header from "./routes/Header.js";
import Main from "./routes/Main.js";
import Content1 from "./routes/Content1.js";
import { resetJW } from "./store/jwSlice.js";

function App() {
  const store = useSelector((state) => { return state });
  const dispatch = useDispatch();
  const resetJW_ = (path) => {dispatch(resetJW(path));}
  const navigate = useNavigate();

  useEffect(() => {
    jw.onStart();
    return () => {
      jw.onEnd();
    }
  }, [store.jwState])

  return (
    <div className="App">
      <Header resetJW={resetJW_} navigate={navigate} store={store}/>
      <main className="jw">
        <Routes>
          <Route path="/" element={<Main resetJW={resetJW_} navigate={navigate}/>} />
          <Route path="/content1" element={<Content1 resetJW={resetJW_} navigate={navigate}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;