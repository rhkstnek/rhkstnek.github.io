import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { moveDel } from "../store";

function El0() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const boo = useSelector((state) => { return state })

  let { cong } = useParams();
  let result = boo.board.find(
    function (e) {
      return e.id == cong;
    }
  );


  //  목록
  const moveList = () => { navigate('/board'); };

  return (
    <div className="tC">
      <div className="list_box tL">
        <div className="btop">
          num : &lt;{result.id}&gt;
          <br /><br />
          title : {result.tit}
          <br /><br />
          <div className="tR">
            Date : {result.day}
          </div>
        </div>
        <br />
        <div className="tR">
          <button onClick={()=>{
            dispatch(moveDel(cong))
            moveList()
          }}>삭제</button>
          <button onClick={moveList}>목록</button>
        </div>
      </div>

    </div>
  )
}

export default El0;