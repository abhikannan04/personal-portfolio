import React from 'react'
import "./Product.css"
const Product = ({img , link , title}) => {
  return (
    <div className='p' >
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='_blank' rel="noreferrer">
        <img src={img} alt="" className='p-img' />
      </a>
      <p className='prod-title'>{title}</p>
    </div>
  )
}

export default Product
