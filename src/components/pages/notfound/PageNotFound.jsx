import React from 'react'
import { NotFoundIcon } from '../../ui/Icons'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <NotFoundIcon />
        <h1>Page Not Found</h1>

        <Link to='/'>Go Back Home</Link>
    </div>
  )
}

export default PageNotFound