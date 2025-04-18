import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopHam from "./shopham";
import "./innovation.scss"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

function ShopMy({ product, setProduct, id, setId }) {

  let [새로운, set새로운] = useState('')
  let [test1, setTest1] = useState('');
  let [변경, set변경] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        새로운 = user.uid
        set새로운(새로운)
        test1 = product.findIndex((item) => item.프라이빗)
        setTest1(test1)
        console.log(test1)
        if(test1 < 0){
          set변경(true)
        }else{
          set변경(false)
        }
      }else{

      }
    })
  }, [auth],[test1]);
  console.log(product.프라이빗)
  console.log(새로운)
  // console.log(product[test1].프라이빗)


  return (
    <div className="innovation">
      <ShopHam />
      <h2><span style={{ color: 'brown' }}>목록</span>보기</h2>
      <ul className="myList">
        <li>
          <div>
            <span>사진</span><span>제목</span>
            <span>수정</span><span>삭제</span>
          </div>
        </li>

        {product.map((aa, ii) => {
          return (
            <li key={ii}>
              {
                product[ii].프라이빗 == 새로운 ?
                  <>
                    <div>
                      <div>
                        <Link id={product[ii].id} to={`/shop/shop0/${product[ii].id}`}>
                          <img src={aa.thumb} alt="썸네일 미니이미지" />
                        </Link>
                      </div>
                      <div>
                        {aa.title}
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
                        <button
                          onClick={() => {
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
                        {/* } */}
                      </div>
                    </div>
                  </> : 
                  null
              }
            </li>
          )
        })}
      </ul>
      <b className={ 변경 === true  ? 'boim':'anboim'}>" 현재 등록된 상품이 없습니다 "</b>
    </div>
  )

}

export default ShopMy;