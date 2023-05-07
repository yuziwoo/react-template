import { useSelector, useDispatch } from "react-redux";
import { resetJW } from "./../store/jwSlice.js";

function Main(props) {
  let store = useSelector((state) => { return state })
  let dispatch = useDispatch();

  return (
    <main className="jw">
      <button onClick={() => {
        dispatch(resetJW());
      }}>
        컨텐츠 리로드
      </button>
    </main>
  )
}

export default Main;