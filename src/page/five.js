import axios from "axios"
import { useEffect, useState } from "react"

function Five() {
  let [now, setNow] = useState(true)
  let [coin, setCoin] = useState([])

  useEffect(() => {
    setTimeout(() => {
      axios.get
      ('https://api.coinpaprika.com/v1/tickers')
      // ('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd')
      .then((joo) => {
        setCoin(joo.data)
        // setCoin(joo.data.data.coin.links)
        setNow(false)
      })
      .catch(() => {
        console.log('x')
      })
    }, 200);
    
  }, [])



  return (
    <div className="tC">
      <h3 >코인정보입니다. ({coin.length})개</h3>
      <br/>
      <h3>{now != '' ? `로딩중...` :
        <select>
          {
            coin.map((a, i) =>
              <option key={i}>
                 이름: {coin[i].name}, 가격: {a.quotes.USD.price}
              </option>
            )
          }
        </select>
      }</h3>
      {/* {console.log(coin)} */}

    </div>
  )
}

export default Five