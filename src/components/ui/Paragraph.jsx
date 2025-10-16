import React from 'react'

const Paragraph = ({className, text}) => {
  return (
    <p className={className}>
        {text || "Paste your text here"}
    </p>
  )
}

export default Paragraph