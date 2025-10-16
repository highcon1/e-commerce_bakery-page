import React from 'react'

const HeroTitle = ({className, title}) => {
  return (
    <h1 className={className}>{title || "Default Text"}</h1>
  )
}

export default HeroTitle