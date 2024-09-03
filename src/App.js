import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from 'react-router-dom';
// import One from './page/one.js';
// import Two from './page/two.js';
// import Three from './page/three.js';
import Four from './page/four.js';
import Five from './page/five.js';
import Movie from './page/movie.js';
// import Detail from './page/detail.js';
import Last from './page/last.js'; //날씨
import Mdetail from './page/mdetail.js'; //영화 상세화면
import Seven from './page/seven.js'; //팀 정하기
import Eight from './page/eight.js'; //가위바위보
import Calc from './page/calc.js'; //계산기
import Board from './page/board.js';
import El0 from './page/el0.js';
import El1 from './page/el1.js';
import Crud from './page/crud.js'; // crud

// 
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// Import Swiper modules
import { Navigation, Pagination, EffectCards, A11y, FreeMode, Thumbs } from 'swiper/modules';




function App() {
  // swipwer
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  // 스크롤
  const [scr, setScr] = useState(0) //수치_저장
  const upSrc = () => { setScr(window.scrollY) } //수치
  console.log('+',scr)

  // 높이를 구해보자
  // const divRef = useRef(null);
  // const divRef2 = useRef(null);
  // const [dimensions, setDimensions] = useState({ height: 0, height: 0 });

  useEffect(() => { //수치_업뎃
    window.scrollTo({ top: 0 }) 
    window.addEventListener('scroll', upSrc)
    // if (divRef.current, divRef2.current) {
    //   const divH = window.outerHeight;
    //   const divH2 = divRef2.current.offsetHeight;
    //   setDimensions({ divH, divH2 });
    // }
    return () => window.removeEventListener('scroll', upSrc)
  }, [])


  // 노트북 S.T.A.R.T텍스트 이벤트
  const txt = "S.T.A.R.T";
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크 
    }, 200);
    if (Count === txt.length) {  // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval);
      // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval);
    // 언마운트시 setInterval을 해제합니다
  },)


  // 탭 이벤트
  let [tab, setTab] = useState(0)

  return (
    <div >
      <nav className="navi">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + `/img/home.png`} alt="홈버튼" />
        </Link>
        {/* <Link to="/one">소개</Link> */}
        {/* <Link to="/two">모달</Link> */}
        {/* <Link to="/three">쇼핑몰</Link> */}

        {/* <Link to="/four">할일</Link>
        <Link to="/five">코인</Link>
        <Link to="/six">영화</Link>
        <Link to="/seven">그룹</Link>
        <Link to="/eight">게임</Link> */}

        {/* <Link to="/nine">연락처</Link> */}
        {/* <Link to="/ten">리덕스</Link> */}

        {/* <Link to="/eleven">게시판(Redux Toolkit)</Link>
        <Link to="/twelve">만들</Link>
        <Link to="/Last">날씨</Link> */}
        {/* <Link to="/five">할일</Link> */}
      </nav>

      <Routes>
        {/* <Route path="/five" element={<Five />} /> */}
        <Route path="/" element={
          <div className="life_wrap ">

            <div className="lief_area ">
            <div className="mscroll">
              <img src={process.env.PUBLIC_URL + `/img/mouse.png`} alt="마우스스크롤아이콘" />
            </div>


              <div  className="wrap1 tC">
                <div className="first_top">
                  <h2>Nice to meet you. "<em >✋</em>"</h2>
                  <br />
                  <h3>Let me introduce my project❗</h3>
                  <div className={scr > 30 ? `line1 scrolled` : `line1`}>line</div>
                </div>
                <div className="first_btm">
                  <img src={process.env.PUBLIC_URL + `/img/laptop.png`} alt="노트북" />
                  <p>Front-End <span>{Text}</span></p>
                </div>
                
              <div className="second_area">
                <div className="second_tit">Scroll Down</div>
                <div className="second_top">
                  <span style={{"--i":0}}></span>
                  <span style={{"--i":1}}></span>
                  <span style={{"--i":2}}></span>
                  <span style={{"--i":3}}></span>
                  <span style={{"--i":4}}></span>
                  <span style={{"--i":5}}></span>
                  <span style={{"--i":6}}></span>
                  <span style={{"--i":7}}></span>
                  <span style={{"--i":8}}></span>
                  <span style={{"--i":9}}></span>
                </div>
                <div className="second_btm">
                  <span style={{"--i":0}}>T</span>
                  <span style={{"--i":1}}>a</span>
                  <span style={{"--i":2}}>k</span>
                  <span style={{"--i":3}}>e</span>
                  <span style={{"--i":4}}>　</span>
                  <span style={{"--i":5}}>a</span>
                  <span style={{"--i":6}}>　</span>
                  <span style={{"--i":7}}>l</span>
                  <span style={{"--i":8}}>o</span>
                  <span style={{"--i":9}}>o</span>
                  <span style={{"--i":10}}>k</span>
                  <span style={{"--i":11}}>　</span>
                  <span style={{"--i":12}}>:)</span>
                </div>
              </div>
              </div>


              <div className={scr > 26600 ? `wrap2 scrolled` : `wrap2`}  >
                <div className="">
                  <div><h3>History</h3>
                    <div className="intro_wrap">
                      <strong>
                        List
                      </strong>
                      <em className="tC">퍼블리셔로서 했던 작업</em>
                      <br />
                      <img className="intro_pin" src={process.env.PUBLIC_URL + `/img/pin.png`} alt='pin' />

                      <span className="clearfix">1. 개인작업 : <b>My Page</b><a href="http://rhkstnek.dothome.co.kr/" target="_blank">이동</a></span>
                      <hr />

                      <div>
                        <p>2. 회사에서 : <b>Web Site</b></p>
                        <ul className="intro_list clearfix">
                          <li>한국문화재재단<a href="https://www.kh.or.kr/kha" target="_blank">이동</a></li>
                          <li>전통문화포털<a href="https://www.kculture.or.kr/main/kculture" target="_blank">이동</a></li>
                          <li>여주세종문화관광재단<a href="https://www.yjcf.or.kr/yjcf" target="_blank">이동</a></li>
                          <li>양평공사<a href="https://www.yp04.or.kr/main" target="_blank">이동</a></li>
                          <li>오산시시설관리공단<a href="https://www.osansisul.or.kr/main" target="_blank">이동</a></li>
                          <li>한국공예·디자인문화진흥원<a href="https://www.kcdf.or.kr/main" target="_blank">이동</a></li>
                          <li>문화역284<a href="https://www.seoul284.org/main" target="_blank">이동</a></li>
                          <li>한국해양재단<a href="https://ocean.or.kr/main" target="_blank">이동</a></li>
                          <li>한국과학창의재단<a href="https://www.kofac.re.kr/main" target="_blank">이동</a></li>
                          <li>크레존<a href="https://www.crezone.net/main" target="_blank">이동</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Experience
                      <span>( Language/Framework/Library )</span></h3>
                    <ul>

                      <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'skyblue', width: '16px' }}
                      >
                        <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 00-3.107-.534A23.892 23.892 0 0012.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 00-3.113.538 15.02 15.02 0 01-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 01-4.412.005 26.64 26.64 0 01-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 011.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0112 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 00-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 00-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 00-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 001.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 01-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 01-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                        </path>
                      </svg>React
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#d9d92e', width: '16px' }}><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>
                        JavaScript
                      </li>
                      <li><img className="" src={process.env.PUBLIC_URL + `/img/redux.svg`} alt='redux' />
                        Redux-toolkit</li>

                      <li><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'red', width: '16px' }}><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg>HTML</li>
                      <li>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'navy', width: '16px' }}><path d="M10.65 12.122c-.164 0-.276.016-.334.032v1.056c.07.016.154.021.27.021.43 0 .696-.218.696-.583 0-.33-.228-.526-.631-.526z" ></path><path d="M13.605 3.834a.31.31 0 00-.075-.203L10.445.107s-.002 0-.003-.002a.311.311 0 00-.144-.09L10.28.009A.316.316 0 0010.209 0H2.627A.628.628 0 002 .627v14.745c0 .347.282.628.627.628H12.98a.628.628 0 00.628-.627V3.87l-.003-.036zM5.975 13.8c0 1.02-.488 1.375-1.274 1.375a2.11 2.11 0 01-.589-.085l.09-.653c.112.037.255.064.414.064.34 0 .552-.154.552-.711v-2.25h.807v2.26zm1.55 1.37c-.41 0-.813-.107-1.014-.218l.164-.669c.218.112.552.223.897.223.372 0 .568-.154.568-.388 0-.222-.17-.35-.6-.504-.594-.206-.981-.536-.981-1.056 0-.61.51-1.077 1.353-1.077.403 0 .7.085.913.18l-.18.653a1.704 1.704 0 00-.749-.17c-.35 0-.52.16-.52.345 0 .228.202.33.664.504.63.234.929.563.929 1.067 0 .6-.462 1.11-1.445 1.11zm4.23-1.694c-.277.26-.685.377-1.163.377-.106 0-.202-.005-.276-.016v1.28h-.801v-3.53c.249-.043.6-.074 1.093-.074.499 0 .855.095 1.093.286.229.18.383.478.383.828s-.117.648-.33.85zm-9.128-2.821V.628h7.269v3.21c0 .173.14.314.313.314h2.771v6.502H2.628z" ></path><path d="M7.278 5.94s-.422-.813-.407-1.406c.012-.424.968-.843 1.344-1.452.374-.61-.047-1.202-.047-1.202s.093.437-.156.89c-.25.452-1.172.718-1.531 1.499-.358.78.797 1.67.797 1.67z" ></path><path d="M8.856 3.473s-1.437.546-1.437 1.17c0 .625.39.828.453 1.03.062.204-.11.547-.11.547s.563-.39.469-.843c-.094-.453-.531-.593-.281-1.046.167-.303.906-.858.906-.858z" ></path><path d="M7.122 6.765c1.482-.054 1.656-.333 1.81-.467-.858.234-3.137.22-3.154.047-.015-.172.703-.312.703-.312s-1.124 0-1.218.28c-.094.282.532.498 1.859.452zM9.15 6.065s.641 0 .704.39c.062.39-.812.968-.812.968s1.376-.278 1.248-.983c-.156-.86-1.14-.375-1.14-.375zM7.589 7.189c-.65.073-1.436.015-1.5-.095-.06-.109.11-.171.11-.171-.78.188-.354.515.562.578.784.053 1.661-.235 1.661-.235l.27-.218s-.618.086-1.103.14zM6.388 7.73s-.355.01-.375.198c-.021.186.11.28.986.26 1.042-.025 1.216-.149 1.324-.24l.254-.19c-.682.088-.734.112-1.12.123-.39.01-1.07.036-1.1-.036-.032-.074.03-.115.03-.115zM9.792 8.574c.135-.147-.042-.261-.042-.261s.062.073-.02.156c-.084.083-.844.291-2.062.353-1.218.063-2.54-.114-2.582-.27-.04-.156.677-.28.677-.28-.083.01-1.082.03-1.114.302-.03.27.437.488 2.311.488 1.874 0 2.697-.344 2.832-.488z" ></path><path d="M9.063 9.187c-.823.167-3.32.062-3.32.062s1.623.385 3.476.062c.886-.154.937-.583.937-.583s-.27.292-1.093.459z" >
                        </path></svg>
                        JSP</li>
                      <li>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#215fd9', width: '16px' }}><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                        CSS</li>
                      <li>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#f37a07', width: '16px' }}><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 010 2.6 1.844 1.844 0 01-2.609 0 1.834 1.834 0 010-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 01-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 002.186 0l10.43-10.43a1.544 1.544 0 000-2.187"></path></svg>
                        Git</li>
                      <li>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'rgb(1 63 153)', width: '16px' }}><path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"></path></svg>
                        JQuery</li>

                      <li>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'purple', width: '16px' }}><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path></svg>
                        BootStrap</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={scr > 27300 ? `wrap3 scrolled` : `wrap3`}>
                <h3>1. Project ( tab )</h3>
                <LeftTabsExample tab={tab} setTab={setTab} />
                <div className={scr > 27700 ? `wrap3_2 scrolled` : `wrap3_2`}>
                  <h3>2. Project ( url )</h3>

                  <div className="box">
                    <Link to="/movie">Movie</Link>
                    <Link to="/board">Board</Link>
                    <Link to="/last">Weather</Link>
                  </div>
                  <br /><br />
                </div>
              </div>

              <div className='wrap4 tC'>
                <h2>PlayGround "<em >🎪</em>"</h2>
                <div className={scr > 28400 ? `cont1 scrolled` : `cont1`}>
                  <div className="hobby">
                    <h3>Hobby card</h3>
                    <Swiper
                      modules={[Navigation, Pagination, EffectCards, A11y]}
                      // spaceBetween={10}
                      // slidesPerView={1}
                      // navigation
                      // pagination={{ clickable: true }}

                      effect={'cards'}
                      grabCursor={true}

                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide>
                        <div className="card_top">A<br />♥</div>
                        <div className="card_img">
                          <img src={process.env.PUBLIC_URL + `/img/hb1.png`}
                            alt="취미~" />
                        </div>
                        <div className="card_btm">A<br />♥</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card_top">2<br />♥</div>
                        <div className="card_img">
                          <img src={process.env.PUBLIC_URL + `/img/hb2.png`}
                            alt="취미~" />
                        </div>
                        <div className="card_btm">2<br />♥</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card_top">3<br />♥</div>
                        <div className="card_img">
                          <img src={process.env.PUBLIC_URL + `/img/hb3.png`}
                            alt="취미~" />
                        </div>
                        <div className="card_btm">3<br />♥</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card_top">4<br />♥</div>
                        <div className="card_img">
                          <img src={process.env.PUBLIC_URL + `/img/hb4.png`}
                            alt="취미~" />
                        </div>
                        <div className="card_btm">4<br />♥</div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card_top">5<br />♥</div>
                        <div className="card_img">
                          <img src={process.env.PUBLIC_URL + `/img/hb5.png`}
                            alt="취미~" />
                        </div>
                        <div className="card_btm">5<br />♥</div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  
                  <div className="series">
                    <h3>Series</h3>
                    <Swiper
                      style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                      }}
                      loop={true}
                      spaceBetween={50}
                      navigation={true}
                      thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp1.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp2.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp3.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp4.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp5.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp6.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp7.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp8.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                    </Swiper>
                    <Swiper 
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={5}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp1.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp2.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp3.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp4.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp5.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp6.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp7.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                      <SwiperSlide>
                      <img src={process.env.PUBLIC_URL + `/img/hp8.png`}
                            alt="해리시리즈" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  
                </div>

                <div className="cont2">
                  <h3>Cook</h3>
                  <Crud/>
                </div>
              </div>




              <div className="wrap0">
                <div className="wrap0_area">
                  <h3>Contact</h3>
                  <div className="wrap0_box">
                    <div>
                      <a href="https://github.com/rhkstnek" target="_blank" title="이동"><img src={process.env.PUBLIC_URL + `/img/github.png`} alt="깃허브" />
                        <span>Git hub</span>
                      </a>
                    </div>
                    <div>
                      <a href="mailto:sk59178917@gmail.com">
                        <img src={process.env.PUBLIC_URL + `/img/gmail.png`} alt="g메일" />
                        <span>G-mail</span>
                      </a>
                    </div>
                    <div>
                      <a href="tel:010-5917-8917">
                        <img src={process.env.PUBLIC_URL + `/img/phone.png`} alt="전화" />
                        <span>Cell phone</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
        {/* <Route path="/one" element={<One />} /> */}
        {/* <Route path="/two" element={<Two rhkstn={rhkstn} />} /> */}
        {/* <Route path="/three" element={ <div><ul className="sh_list"><Three 
        /></ul></div> } >
        </Route> */}
        {/* <Route path='/detail' element={<Detail />} /> */}
        {/* <Route path="/four" element={<Four />} /> */}
        <Route path="/five" element={<Five />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/Mdetail/:id" element={<Mdetail />} />
        {/* <Route path="/Seven" element={<Seven />} /> */}
        {/* <Route path="/Eight" element={<Eight />} /> */}
        {/* <Route path="/Nine" element={<Nine />} /> */}
        {/* <Route path="/Ten" element={<Ten />} /> */}

        <Route path="/board" element={<Board />} />
        <Route path="/el0" element={<El0 />} />
        <Route path="/el1" element={<El1 />} />
        <Route path="/el0/:cong" element={<El0 />} />

        <Route path="/Last" element={<Last />} />
      </Routes>
    </div>
  );
}

function LeftTabsExample({ tab, setTab }) {

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link onClick={() => { setTab(0) }} eventKey="first">할 일 목록</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => { setTab(1) }} eventKey="fourth">코인 정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => { setTab(2) }} eventKey="second">팀원  정하기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => { setTab(3) }} eventKey="third">가위바위보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => { setTab(4) }} eventKey="fifth">계산기</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {tab == 0 ? <Tab.Pane eventKey="first"><Four></Four></Tab.Pane> : null}
            {tab == 1 ? <Tab.Pane eventKey="fourth"><Five></Five></Tab.Pane> : ''}
            {tab == 2 ? <Tab.Pane eventKey="second"><Seven /></Tab.Pane> : null}
            {tab == 3 ? <Tab.Pane eventKey="third"><Eight></Eight></Tab.Pane> : ''}
            {tab == 4 ? <Tab.Pane eventKey="fifth"><Calc></Calc></Tab.Pane> : ''}

          </Tab.Content>
        </Col>
      </Row>

    </Tab.Container>
  );
}

export default App;
