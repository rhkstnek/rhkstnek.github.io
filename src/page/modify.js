import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import "./innovation.scss"
import ShopHam from "./shopham";

const Modify = ({ product, idNum, setIdNum, id, setId }) => {
  const { uid } = useParams()
  let nawa = product.find(
    function (e) {
      return e.id == uid;
    }
  );

  const backpage = useNavigate();
  const moving = () => { backpage('/shopmy'); };

  // let [idNum, setIdNum] = useState(4);
  // const [look, setLook] = useState(false);
  // 이미지 업로드 input의 onChange
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  let [aa, setA] = useState(nawa.title);
  let [bb, setB] = useState(nawa.price);
  let [cc, setC] = useState(nawa.doc);
  let [dd, setD] = useState(nawa.address);

  function writea(e) {
    aa = e.target.value; setA(aa)
  }
  function writeb(e) {
    bb = e.target.value; setB(bb)
  }
  function writec(e) {
    cc = e.target.value; setC(cc)
  }
  function writed(e) {
    dd = e.target.value; setD(dd)
  }

  
  return (
    <div className='innovation'>
      <ShopHam />
      <h2><span style={{ color: 'green' }}>수정</span>하기</h2>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <div className='made_area'>
          <div className='ma_left'>
            <div className='thumb'>
              <div className='im'>
                {imgFile ? <img src={imgFile} alt="프로필 이미지" /> : <img src={nawa.thumb} alt="프로필 이미지" />}
              </div>
              <label htmlFor='o30'>이미지 첨부</label>
              <input id='o30' type='file' accept="image/*" onChange={saveImgFile}
                ref={imgRef} />
            </div>
          </div>
          <div className='ma_right'>
            <div><label htmlFor='o31'>제목</label><input value={aa} onChange={writea} id='o31' type='text' /></div>
            <div><label htmlFor='o32'>가격</label><input value={bb} onChange={writeb} id='o32' type='text' /></div>
            <div><label htmlFor='o33'>내용</label><textarea value={cc} onChange={writec} id='o33' type='text' /></div>
            <div><label htmlFor='o34'>주소</label><input value={dd} onChange={writed} id='o34' type='text' /></div>
          </div>
        </div>

        <div className='ma_btm'>
          <button>
            <Link to='/shopmy'>취소</Link>
          </button>
          <button onClick={() => {
            for (let index = 0; index < product.length; index++) {
              if (product[index].id === id) {
                product[index] = 
                {
                  id: id, 
                  thumb: imgFile ? `${imgFile}`: `${nawa.thumb}`,
                  title: aa, price: bb, doc: cc, address: dd
                }
              }
              setTimeout(() => {
                moving()  
              }, 300);
              console.log(product[index].id, id)
            }
          }
          }>수정</button>
        </div>
      </form>
    </div>
  )
}

export default Modify