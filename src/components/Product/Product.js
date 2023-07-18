import React from 'react'
import "./Product.css"
import{products} from "../../data"
const Product = ({img , link , title}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='_blank'rel='noreference'>
        <img src={img} alt="" className='p-img' />
      </a>
      <p className='prod-title'>{title}</p>
    </div>
  )
}

export default Product
