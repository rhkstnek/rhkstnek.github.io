import { useState } from "react";
import "./innovation.scss"
import ShopHam from "./shopham";
import AxiosPost from "./axiosPost";
import { Link } from 'react-router-dom';
import axios from "axios"

const Shop = ({ product}) => {
  const [look, setLook] = useState(false); // 햄버거

  return (
    <div className="innovation">
      <ShopHam />
      <br />
      <AxiosPost product={product}/>
    </div>
  )
}

export default Shop