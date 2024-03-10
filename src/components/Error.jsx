import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    console.log("useRouteError", useRouteError())
    const error = useRouteError()
  return (
    <div>{error.status} {error.statusText}</div>
  )
}

export default Error