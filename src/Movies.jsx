import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movies}=useGlobalContext();

  return (
    <>
     {
      movies.map((currElem,index)=>{
        return(
          <div key={index}>
          <h1>{currElem.Title}</h1>
          </div>
        )
      })
     }
    </>
  )
}

export default Movies
