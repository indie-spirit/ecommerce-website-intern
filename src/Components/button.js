import React from 'react'
import './buttonStyle.css';
const Button = ({title, to}) => {
  return (
    <div>
        <a href={to}>
          <button className='btn'>{title}</button>
        </a>
       
        <p>fro button</p>
    </div>
  )
}

export default Button