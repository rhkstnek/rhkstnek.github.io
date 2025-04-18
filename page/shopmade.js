import React, { useEffect, useRef, useState, } from 'react'
import "./innovation.scss"
import ShopHam from "./shopham";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

const ShopMade = ({ product, idNum, setIdNum, id, setId }) => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  let backpage = useNavigate();
  let mov = () => {backpage('/shop')}

  // 이미지 업로드 input의 onChange
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

  let [새로운, set새로운] = useState('')
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        새로운 = user.uid
        set새로운(새로운)
      }
    })
  }, [auth]);

  let [aa, setA] = useState('');
  let [bb, setB] = useState('');
  let [cc, setC] = useState('');
  let [dd, setD] = useState('');

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
  let [col, setCol] = useState('')
  const [look, setLook] = useState(false);
  return (
    <div className='innovation'>
      <ShopHam />
      <h2><span style={{ color: 'grey' }}>작성</span>하기</h2>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <div className='made_area'>
          <div className='ma_left'>
            <div className='thumb'>
              <div className='im'>
                {imgFile ? <img src={imgFile} alt="프로필 이미지" /> : <p style={{ color: col }}>이미지를 첨부해주세요.</p>}
              </div>
              <label htmlFor='o20'>이미지 첨부하기</label>
              <input id='o20' type='file' accept="image/*" onChange={saveImgFile}
                ref={imgRef} />
            </div>
          </div>
          <div className='ma_right'>
            <div><label style={{ color: col }} htmlFor='o21'>제목</label><input value={aa} onChange={writea} id='o21' type='text' /></div>
            <div><label style={{ color: col }} htmlFor='o22'>가격</label><input value={bb} onChange={writeb} id='o22' type='text' /></div>
            <div><label style={{ color: col }} htmlFor='o23'>내용</label><textarea value={cc} onChange={writec} id='o23' type='text' /></div>
            <div><label style={{ color: col }} htmlFor='o24'>주소</label><input value={dd} onChange={writed} id='o24' type='text' /></div>
          </div>
        </div>

        <div className='ma_btm'>
          <button onClick={mov}>취소</button>
          <button onClick={() => {
            if (aa && bb && cc && dd && imgFile != '') {
              setCol('#fff')
              if (window.confirm('등록 하시겠습니까??')) {
                product.push(
                  { id: idNum, thumb: imgFile, title: aa, price: bb, doc: cc, address: dd, 프라이빗:새로운}
                )
                setId(idNum)
                setIdNum(idNum+1)
                // console.log(idNum, id)
                alert('등록완료')
                mov()
              } else {
                alert('취소되었습니다.')
              }
            } else {
              setCol('#f00')
              alert('내용을 모두 입력해주세요.')
            }
          }}
          >등록</button>
        </div>
        {/* {console.log(product)} */}
      </form>
    </div>
  )
}

export default ShopMade