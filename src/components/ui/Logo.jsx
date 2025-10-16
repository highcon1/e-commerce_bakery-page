import React from 'react'
import Logo from "../../assets/Logo.webp";

const LogoImg = ({className = ""}) => {
  return (
    <img className={className} src={Logo} alt="Pickbazar logo.webp" />
  )
}

export default LogoImg