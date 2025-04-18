function One() {

  return (
    <div className="tC">
      <div className="intro_wrap">
        <strong>
        목차
        </strong>
          <img className="intro_pin" src={process.env.PUBLIC_URL + `/img/pin.png`} alt='pin' />
        
        <span className="clearfix">1. 개인작업 : <b>My Page</b><a href="http://rhkstnek.dothome.co.kr/" target="_blank">바로가기</a></span>
        <hr/>

        <div>
          <p>2. 회사에서 : <b>Web Site</b></p>
          <ul className="intro_list clearfix">
            <li>한국문화재재단<a href="https://www.kh.or.kr/kha" target="_blank">바로가기</a></li>
            <li>전통문화포털<a href="https://www.kculture.or.kr/main/kculture" target="_blank">바로가기</a></li>
            <li>여주세종문화관광재단<a href="https://www.yjcf.or.kr/yjcf" target="_blank">바로가기</a></li>
            <li>양평공사<a href="https://www.yp04.or.kr/main" target="_blank">바로가기</a></li>
            <li>오산시시설관리공단<a href="https://www.osansisul.or.kr/main" target="_blank">바로가기</a></li>
            <li>한국공예·디자인문화진흥원<a href="https://www.kcdf.or.kr/main" target="_blank">바로가기</a></li>
            <li>문화역284<a href="https://www.seoul284.org/main" target="_blank">바로가기</a></li>
            <li>한국해양재단<a href="https://ocean.or.kr/main" target="_blank">바로가기</a></li>
            <li>한국과학창의재단<a href="https://www.kofac.re.kr/main" target="_blank">바로가기</a></li>
            <li>크레존<a href="https://www.crezone.net/main" target="_blank">바로가기</a></li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default One