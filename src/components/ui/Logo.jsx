import React from 'react'
import Logo from "../../assets/Logo.webp";
import { Link } from 'react-router-dom';

const LogoImg = ({className = ""}) => {
  return (
    <Link to="/">
      <img className={className} src={Logo} alt="Pickbazar logo.webp" />
    </Link>
  )
}

export default LogoImg