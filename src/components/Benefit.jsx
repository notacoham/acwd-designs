import React from 'react'
import { IoMdCheckboxOutline } from "react-icons/io";

const Benefit = ({ title, description }) => {
  return (
    <div className="benefit">
        <h2 className="benefit-header"><IoMdCheckboxOutline />    {title}</h2>
        <p className="benefit-body">{description}</p>
    </div>
  )
}

export default Benefit
