import { useState } from "react";
import "./innovation.scss"
import UsedH from "./usedh";
import AxiosPost from "./axiosPost";
import { Link } from 'react-router-dom';

const Used = ({ product, id, setId }) => {
  const [look, setLook] = useState(false); // 햄버거

  return (
    <div className="innovation">
      <UsedH />
      {/* <ul className="pro_list">
        {product.map((a, i) => {
          return (
            <li key={i}>
              <Link to={`/used/used0/${product[i].id}`}
              >
                <div className="p_thumb">
                  <img src={a.thumb} />
                </div>
                <div className="p_title">[{a.id}]{a.title}</div>
                <div className="p_price">{a.price} 원1</div>
                <div className="p_address">{a.address}</div>
              </Link>
            </li>
          )
        })}
      </ul> */}
      <br />
      <AxiosPost product={product}/>
    </div>
  )
}

export default Used