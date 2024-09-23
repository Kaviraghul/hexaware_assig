import React from 'react'
import { Link } from 'react-router-dom'
import { pathName } from '../../../utils/app_routes'

function PageNotFound() {
  return (
    <div>
        <h1>404 page not found</h1>
        <Link to = {pathName.main} >Navigate back to home</Link>
    </div>
  )
}

export default PageNotFound