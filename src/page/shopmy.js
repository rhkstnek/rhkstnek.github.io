import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShopHam from "./shopham";
import "./innovation.scss"

function ShopMy({ product, setProduct, id, setId }) {
  const { uid } = useParams()
  let nawa = product.find(
    function (e) {
      return e.id == uid;
    }
  );

  return (
    <div className="innovation">
      <ShopHam />
      <h2><span style={{color:'brown'}}>목록</span>보기</h2>
      <ul className="myList">
        <li>
          <span>사진</span><span>제목</span>
          <span>수정</span><span>삭제</span>
        </li>
        {product.map((aa, ii) => {

          return (
            <li key={ii}>
              <div><Link id={product[ii].id} to={`/shop/shop0/${product[ii].id}`}


              >
                <img src={aa.thumb} />
              </Link></div>
              <div>{aa.title}
              </div>
              <div>
                <button>
                  <Link to={`/modify/${product[ii].id}`}
                    onClick={() => {
                      setId(product[ii].id)
                    }}
                  >

                    <img className="mod" src='/img/edit.png' alt="수정버튼" />
                  </Link>
                </button>
              </div>
              <div>
                <button onClick={() => {
                  id = product[ii].id
                  setId(id)
                  console.log(id)
                  const box = [];
                  if (window.confirm('삭제 하시겠습니까??')) {
                    for (let index = 0; index < product.length; index++) {
                      if (product[index].id !== id) {
                        box.push(product[index])
                      }
                    }
                  } else {
                    return alert('취소되었습니다.')
                  }

                  setProduct(...[box])
                }}>
                  <img className="mod" src={process.env.PUBLIC_URL + `/img/delete.png`} alt="삭제버튼" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default ShopMy;