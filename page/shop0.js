import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShopHam from "./shopham";

function Shop0({ product,ok, setOk }) {
  const { uid } = useParams()
  let nawa = product.find(
    function (e) {
      return e.id == uid;
    }
  );

  const backpage = useNavigate();
  function mov(){
    backpage('/shop');
  }

  return (
    <div className="innovation">
      <ShopHam setOk={setOk} ok={ok}/>
      <h2>상세페이지</h2>
      <div className='made_area'>
        <div className='ma_left'>
          <div className='thumb'>
            <div className='im'>
              <img src={nawa.thumb} />
            </div>
            {/* <label htmlFor='o20'>이미지 첨부</label> */}
          </div>
        </div>
        <div className='ma_right'>
          <div><label htmlFor='o21'>제목</label><p>{nawa.title}</p></div>
          <div><label htmlFor='o22'>가격</label><p>{nawa.price}</p></div>
          <div><label htmlFor='o23'>내용</label><span>{nawa.doc}</span></div>
          <div><label htmlFor='o24'>주소</label><p>{nawa.address}</p></div>
        </div>
      </div>
      <div style={{maxWidth:'800px', margin:'0 auto'}}>
        <button className="backArrow" onClick={mov}>
          <img src={process.env.PUBLIC_URL + `/img/left-arrow.png`}/>
        </button>
      </div>
    </div>
  )
}


export default Shop0;