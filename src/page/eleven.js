import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Eleven = () => {
  const bo = useSelector((state) => { return state })

  return (
    <div className="tC">
      <div className="list_wrap">
        <table className="list_area">
          <caption>등업신청 게시판 (번호, 제목, 작성일)</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '*' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {bo.board.map((xx, zz) => {
              let kk = bo.board[zz].id
              return (
                <tr key={zz}>
                  <td>{bo.board[zz].id}</td>
                  <td><Link to={`/el0/${kk}`}>{bo.board[zz].tit}</Link></td>
                  <td>{bo.board[zz].day}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br/>
        <div className="tR">
          <button><Link to='/el1' >게시글 작성</Link></button>
        </div>
      </div>
    </div>
  )

}

export default Eleven;