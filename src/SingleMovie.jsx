import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
const {id}=useParams();

  return (
    <div>
      <h1>I am Single Movie {id}</h1>
    </div>
  )
}

export default SingleMovie
