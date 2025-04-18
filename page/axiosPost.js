import axios from 'axios'
import { useState } from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const AxiosPost = ({ product }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(6);

  const handlePageChange = (page) => { setPage(page); };
  const navigate = useNavigate();

  return (
    <div>
      <ul className='pro_list'>
        {product.slice(
          items * (page - 1),
          items * (page - 1) + items
        ).map((a, i) => {
          return (
            <li key={i}>
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`/shop/shop0/${a.id}`)
                }}
              >
                <div className="p_thumb">
                  <img src={a.thumb} />
                </div>
                <div className="p_title">[{a.id}]{a.title}</div>
                <div className="p_price">{a.price} 원</div>
                <div className="p_address">{a.address}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={product.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}>
        </Pagination>
      </PaginationBox>
    </div>
  )
}

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    
    border: 1px solid #adacac;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; 
  width: 30px;
    height: 30px;
    text-align:center;
    align-content:center;
  }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }

  @media all and (max-width:580px){
  ul.pagination li a { font-size: 0.8rem; 
    width: 25px;
    height: 25px;
    line-height: 23px;
  }}
`

export default AxiosPost